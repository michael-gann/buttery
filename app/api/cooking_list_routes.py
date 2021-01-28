from flask import Blueprint, request, jsonify
from app.models import RecipeIngredient, PantryIngredient, CookingList, db
from app.forms.cooking_lists_form import CookingListForm
from app.forms import PantryItemsForm
from sqlalchemy.orm import selectinload


cooking_list_routes = Blueprint('cooking_list', __name__)


@cooking_list_routes.route("/shopping-list", methods=["GET"])
def get_shopping_list():

    userId = request.args.get("userId")

    recipe_ids_query = db.session.query(
        CookingList).filter(CookingList.user_id == userId).all()

    recipe_ids = {rids.recipe_id for rids in recipe_ids_query}

    # get all recipe ingredients from recipe ids set

    all_recipe_ingredients = db.session.query(
        RecipeIngredient).filter(RecipeIngredient.recipe_id.in_(recipe_ids)).options(selectinload(RecipeIngredient.ingredients), selectinload(RecipeIngredient.measurements)).all()

    # all ingredients and the quantity needed to make the recipe.
    recipe_ingredient_totals = {}

    for ri in all_recipe_ingredients:
        if ri.ingredient_id not in recipe_ingredient_totals:
            recipe_ingredient_totals[ri.ingredient_id] = {"quantity": ri.quantity,
                                                          "name": ri.ingredients.name,
                                                          "measurement": ri.measurements.name,
                                                          "ingredient_id": ri.ingredient_id,
                                                          "measurement_id": ri.measurement_id}
        else:
            recipe_ingredient_totals[ri.ingredient_id]["quantity"] += ri.quantity

    all_ingredient_ids = [
        ri.ingredient_id for ri in all_recipe_ingredients]

    # Ingredients in my pantry that are also in the recipes i want to make
    ingredients_in_pantry = db.session.query(PantryIngredient).filter(
        PantryIngredient.ingredient_id.in_(all_ingredient_ids)).options(selectinload(PantryIngredient.ingredients), selectinload(PantryIngredient.measurements)).all()

    pantry_ingredient_totals = {}

    for pi in ingredients_in_pantry:
        if pi.ingredient_id not in pantry_ingredient_totals:
            pantry_ingredient_totals[pi.ingredient_id] = {"quantity": pi.quantity,
                                                          "name": pi.ingredients.name,
                                                          "measurement": pi.measurements.name}

    shopping_list_totals = {
        id: {
            "name": ri["name"],
            "quantity": ri["quantity"] - pantry_ingredient_totals.get(id, {}).get("quantity", 0),
            "measurement": ri["measurement"],
            "ingredient_id": ri["ingredient_id"],
            "measurement_id": ri["measurement_id"]
        } for id, ri in recipe_ingredient_totals.items()
    }

    return shopping_list_totals


@cooking_list_routes.route("/add-to-shop", methods=["POST"])
def add_to_shop():
    form = CookingListForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    check_exists = db.session.query(CookingList).filter(
        CookingList.recipe_id == form.recipe_id.data).first()

    if check_exists:
        return {"errors": ["recipe ingredients already in your shopping cart!"]}, 500
    else:

        if form.validate_on_submit:
            cooking_list = CookingList(
                user_id=form.user_id.data,
                recipe_id=form.recipe_id.data
            )

            db.session.add(cooking_list)
            db.session.commit()

            return {**cooking_list.to_dict()}
        else:
            return {'errors': ['Internal Server Error']}, 500
    return {'errors': ['Internal Server Error']}, 500


@cooking_list_routes.route("/remove-from-shop", methods=["POST"])
def remove_recipe():
    data = request.get_json()

    recipe_id = data.get("recipeId")

    recipe_to_delete = db.session.query(CookingList).filter(
        CookingList.recipe_id == recipe_id).first()

    db.session.delete(recipe_to_delete)
    db.session.commit()

    cooking_list_query = db.session.query(CookingList).filter(
        CookingList.user_id == recipe_to_delete.user_id).all()

    cooking_list = [{**l.to_dict()} for l in cooking_list_query]

    return jsonify(cooking_list)


@ cooking_list_routes.route("", methods=["GET"])
def get_cooking_list():

    userId = request.args.get("userId")

    cooking_list_query = db.session.query(CookingList).filter(
        CookingList.user_id == userId)

    cooking_list = [{**l.to_dict()} for l in cooking_list_query]

    return jsonify(cooking_list)


@cooking_list_routes.route("/cook-recipe", methods=["PATCH"])
def cook_recipe():
    recipe_id = request.args.get("recipeId")
    user_id = request.args.get("userId")

    # use recipe id to get all recipe ingredients
    recipe_ingredients = db.session.query(
        RecipeIngredient).filter_by(recipe_id=recipe_id).all()

    # new_pantry_ingredient_queries = []

    for recipe_ingredient in recipe_ingredients:
        # find each pantry ingredient and subtract the recipe ingredient from pantry.
        db_pantry_ingredient = PantryIngredient.query.filter_by(
            user_id=user_id
        ).filter_by(ingredient_id=recipe_ingredient.ingredient_id
                    ).filter_by(measurement_id=recipe_ingredient.measurement_id
                                ).first()

        if db_pantry_ingredient is None:
            return {'errors': ["You don't have the required ingredient(s)"]}, 500
        else:
            if db_pantry_ingredient.quantity - recipe_ingredient.quantity == 0:
                db.session.delete(db_pantry_ingredient)
                # db.session.commit()
            else:
                db_pantry_ingredient.quantity -= recipe_ingredient.quantity
                db.session.add(db_pantry_ingredient)

    db.session.commit()

    return "success"
