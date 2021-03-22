from flask import Blueprint, jsonify, request
from app.models import PantryIngredient, db
from sqlalchemy.orm import selectinload
from app.forms import PantryItemsForm
from sqlalchemy import asc


pantry_routes = Blueprint('pantries', __name__)


@pantry_routes.route("user-pantry", methods=["GET"])  # get a users pantry
def pantry():

    userId = request.args.get("userId")

    pantry_ingredients = PantryIngredient.query.filter_by(
        user_id=userId).order_by(asc(PantryIngredient.updated_at)).options(
        selectinload(PantryIngredient.ingredients),
        selectinload(PantryIngredient.measurements)).all()

    return jsonify([
        {
            **ingredient.to_dict(),
            "ingredient": {**ingredient.ingredients.to_dict()},
            "measurement": {**ingredient.measurements.to_dict()}
        }
        for ingredient in pantry_ingredients
    ])


# submit a new item to pantry or update existing
@pantry_routes.route("update-pantry", methods=["PUT"])
def put_pantry():
    form = PantryItemsForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_pantry_ingredient_queries = []
        for pantry_ingredient in form.pantry_ingredients.entries:

            # if user submits the same ingredient with diff measurement
            # this query will find the first one, not the
            db_pantry_ingredient = PantryIngredient.query.filter_by(
                user_id=pantry_ingredient.user_id.data
            ).filter_by(ingredient_id=pantry_ingredient.ingredient_id.data
                        ).filter_by(measurement_id=pantry_ingredient.measurement_id.data
                                    ).first()

            if db_pantry_ingredient is None:
                # ingredient_quantities = {}

                db_pantry_ingredient = PantryIngredient(
                    user_id=pantry_ingredient.user_id.data,
                    ingredient_id=pantry_ingredient.ingredient_id.data,
                    measurement_id=pantry_ingredient.measurement_id.data,
                    quantity=pantry_ingredient.quantity.data
                )
                # ingredient_quantities[
                #     pantry_ingredient.ingredient_id.data
                # ] = pantry_ingredient.quantity.data
                new_pantry_ingredient_queries.append(db_pantry_ingredient)
                db.session.add(db_pantry_ingredient)
            else:
                db_pantry_ingredient.quantity += pantry_ingredient.quantity.data
                # ingredient_quantities[
                #     pantry_ingredient.ingredient_id.data
                # ] = db_pantry_ingredient.quantity
                new_pantry_ingredient_queries.append(db_pantry_ingredient)
            db.session.commit()

            new_pantry_ingredients = [
                {
                    **ingredient.to_dict(),
                    "ingredient": {**ingredient.ingredients.to_dict()},
                    "measurement": {**ingredient.measurements.to_dict()}
                }
                for ingredient in new_pantry_ingredient_queries
            ]

        return jsonify(new_pantry_ingredients)
    return {'errors': ['Internal Server Error']}, 500


@pantry_routes.route("edit-pantry-ingredient", methods=["PUT"])
def edit_pantry():
    form = PantryItemsForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_pantry_ingredient_queries = []
        for pantry_ingredient in form.pantry_ingredients.entries:

            db_pantry_ingredient = PantryIngredient.query.filter_by(
                user_id=pantry_ingredient.user_id.data
            ).filter_by(ingredient_id=pantry_ingredient.ingredient_id.data
                        ).filter_by(measurement_id=pantry_ingredient.measurement_id.data
                                    ).first()

            db_pantry_ingredient.quantity = pantry_ingredient.quantity.data

            new_pantry_ingredient_queries.append(db_pantry_ingredient)

            db.session.add(db_pantry_ingredient)

        db.session.commit()

        new_pantry_ingredient = [
            {
                **ingredient.to_dict(),
                "ingredient": {**ingredient.ingredients.to_dict()},
                "measurement": {**ingredient.measurements.to_dict()}
            }
            for ingredient in new_pantry_ingredient_queries
        ]

        return jsonify(new_pantry_ingredient)
    else:
        return {'errors': ['Didn\'t make it past the form validation!']}, 500
