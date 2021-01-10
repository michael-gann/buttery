from flask import Blueprint, jsonify, request
from app.models import Recipe, RecipeStep, RecipeIngredient, db
from sqlalchemy.orm import selectinload
from app.forms import RecipeForm


recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route("", methods=["GET"])  # get all recipes by current user
def recipes():

    # get current user in query string
    userId = request.args.get("userId")

    recipes_query = Recipe.query.filter_by(user_id=userId).options(
        selectinload(Recipe.recipe_ingredients),
        selectinload(Recipe.recipe_steps)).all()

    recipes = [
        {
            **r.to_dict(),
            "ingredients": [
                {
                    **i.to_dict(),
                    "ingredient": i.ingredients.to_dict(),
                    "measurement": i.measurements.to_dict(),
                } for i in r.recipe_ingredients
            ],
            "steps": [
                s.to_dict() for s in r.recipe_steps
            ]
        } for r in recipes_query
    ]

    recipes_by_id = [
        {recipe["id"]: {**recipe}}
        for recipe in recipes
    ]

    return jsonify(recipes_by_id)


@recipe_routes.route("/<int:id>", methods=["GET"])  # get a single recipe by ID
def recipe(id):
    recipe_query = Recipe.query.options(selectinload(
        Recipe.recipe_ingredients), selectinload(Recipe.recipe_steps)).get(id)

    if recipe_query is None:
        return {"exists": False}

    recipe = {**recipe_query.to_dict(),
              "ingredients": [
                  {**i.to_dict(),
                   "ingredient": i.ingredients.to_dict(),
                   "measurement": i.measurements.to_dict()}
                  for i in recipe_query.recipe_ingredients
    ],
        "steps": [s.to_dict() for s in recipe_query.recipe_steps]

    }

    return recipe


@recipe_routes.route("", methods=["POST"])  # commit a recipe to the db
def post_recipes():
    # TODO: data validation
    form = RecipeForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    print(form.data)
    if form.validate_on_submit():
        is_edit = form.recipe_id.data is not None

        if is_edit:
            recipe_ingredients_to_delete = RecipeIngredient.query.filter_by(
                recipe_id=form.recipe_id.data).all()
            recipe_steps_to_delete = RecipeStep.query.filter_by(
                recipe_id=form.recipe_id.data).all()

            for ri in recipe_ingredients_to_delete:
                db.session.delete(ri)
            for rs in recipe_steps_to_delete:
                db.session.delete(rs)

            recipe_to_edit = Recipe.query.get(form.recipe_id.data)
            recipe_to_edit.name = form.name.data
            recipe_to_edit.content = form.content.data
            db.session.add(recipe_to_edit)

            for ingredient in form.ingredients.entries:
                recipe_ingredient = RecipeIngredient(
                    recipe_id=form.recipe_id.data,
                    ingredient_id=ingredient.ingredient_id.data,
                    measurement_id=ingredient.measurement_id.data,
                    quantity=ingredient.quantity.data
                )

                db.session.add(recipe_ingredient)

            for step in form.steps.entries:
                step = RecipeStep(
                    recipe_id=form.recipe_id.data,
                    step_number=step.step_number.data,
                    content=step.content.data
                )

                db.session.add(step)
            db.session.commit()

            editted_recipe_query = Recipe.query.options(selectinload(
                Recipe.recipe_ingredients),
                selectinload(Recipe.recipe_steps)).get(form.recipe_id.data)

            editted_recipe_expanded = {**editted_recipe_query.to_dict(),
                                       "ingredients": [
                {**i.to_dict(),
                 "ingredient": i.ingredients.to_dict(),
                 "measurement": i.measurements.to_dict()}
                for i in editted_recipe_query.recipe_ingredients
            ],
                "steps":
                [s.to_dict() for s in editted_recipe_query.recipe_steps]

            }

            editted_recipe = {
                editted_recipe_expanded["id"]: editted_recipe_expanded}

            print(editted_recipe)

            return editted_recipe

        recipe = Recipe(
            user_id=form.user_id.data,
            name=form.name.data,
            content=form.content.data
        )
        db.session.add(recipe)
        db.session.commit()

        for ingredient in form.ingredients.entries:
            recipe_ingredient = RecipeIngredient(
                recipe_id=recipe.id,
                ingredient_id=ingredient.ingredient_id.data,
                measurement_id=ingredient.measurement_id.data,
                quantity=ingredient.quantity.data
            )
            db.session.add(recipe_ingredient)

        for step in form.steps.entries:
            step = RecipeStep(
                recipe_id=recipe.id,
                step_number=step.step_number.data,
                content=step.content.data
            )

            db.session.add(step)
        db.session.commit()
        print("RUNNING THE QUERY")
        new_recipe_query = Recipe.query.options(selectinload(
            Recipe.recipe_ingredients), selectinload(Recipe.recipe_steps)).get(recipe.id)
        print("AFTER THE QUERY")
        new_recipe = {**new_recipe_query.to_dict(),
                      "ingredients": [
            {**i.to_dict(),
             "ingredient": i.ingredients.to_dict(),
             "measurement": i.measurements.to_dict()}
            for i in new_recipe_query.recipe_ingredients
        ],
            "steps": [s.to_dict() for s in new_recipe_query.recipe_steps]

        }

        new_recipe_by_id = {new_recipe["id"]: new_recipe}

        return new_recipe_by_id
    return {'errors': ['Internal Server Error']}, 500


@recipe_routes.route("/<int:id>", methods=["DELETE"])
def delete_recipe(id):

    recipe_ingredients_to_delete = RecipeIngredient.query.filter_by(
        recipe_id=id).all()

    recipe_steps_to_delete = RecipeStep.query.filter_by(
        recipe_id=id).all()

    recipe_to_delete = Recipe.query.get_or_404(id)

    for ri in recipe_ingredients_to_delete:
        db.session.delete(ri)
    for rs in recipe_steps_to_delete:
        db.session.delete(rs)

    db.session.delete(recipe_to_delete)

    db.session.commit()

    return {"success": True}
