from flask import Blueprint, jsonify
from app.models import Ingredient, db
from sqlalchemy.orm import selectinload
from sqlalchemy import asc


ingredient_routes = Blueprint('ingredients', __name__)


@ingredient_routes.route("", methods=["GET"])
def ingredients():

    ingredients = db.session.query(Ingredient).options(
        selectinload(Ingredient.ingredient_types)
    ).order_by(asc(Ingredient.id)).all()

    ingredient_list = [
        {
            "category": i.ingredient_types.to_dict(),
            **i.to_dict()
        } for i in ingredients
    ]

    ingredients_by_category = {
        category["name"]: list(
            filter(
                lambda i: i["category"]["id"] == category["id"],
                ingredient_list)
        )
        for category in map(lambda i: i["category"], ingredient_list)
    }

    return jsonify(ingredients_by_category)


@ingredient_routes.route("/options", methods=["GET"])
def ingredient_options():

    ingredients = db.session.query(Ingredient).options(
        selectinload(Ingredient.ingredient_types)
    ).order_by(asc(Ingredient.id)).all()

    ingredient_list = [
        {
            "category": i.ingredient_types.to_dict(),
            **i.to_dict()
        } for i in ingredients
    ]

    ingredient_options = [
        {"value": i["id"], "label": i["name"]}
        for i in ingredient_list]

    return jsonify(ingredient_options)
