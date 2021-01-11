from flask import Blueprint, jsonify
from app.models import IngredientType, db


category_routes = Blueprint('categories', __name__)


@category_routes.route("/options")
def categories():
    categories_query = db.session.query(IngredientType).all()

    categories = [{**category.to_dict()}
                  for category in categories_query]

    # measurement_options = [
    #     {"value": m["id"], "label": m["name"]}
    #     for m in measurements]

    return jsonify(categories)
