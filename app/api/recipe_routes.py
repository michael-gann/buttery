from flask import Blueprint, jsonify, request
from app.models import Recipe, RecipeStep, RecipeIngredient, db
from sqlalchemy.orm import selectinload
from app.forms import RecipeForm


recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route("", methods=["GET"])  # get all recipes by current user
def recipes():
    # send current user in query string
    userId = request.args.get("userId")

    recipes = Recipe.query.filter_by(user_id=userId).options(
        selectinload(Recipe.recipe_ingredients),
        selectinload(Recipe.recipe_steps)).all()

    recipe = [
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
        } for r in recipes
    ]

    return jsonify(recipe)


@recipe_routes.route("/<id>", methods=["GET"])  # get a single recipe by ID
def recipe(id):
    recipe_query = Recipe.query.options(selectinload(
        Recipe.recipe_ingredients), selectinload(Recipe.recipe_steps)).get(id)

    recipe = {**recipe_query.to_dict(),
              "ingredients": [
                  {**i.to_dict(),
                   "ingredient": i.ingredients.to_dict(),
                   "measurement": i.measurements.to_dict()}
                  for i in recipe_query.recipe_ingredients
    ],
        "steps": [s.to_dict() for s in recipe_query.recipe_steps]

    }

    return jsonify(recipe)


@recipe_routes.route("", methods=["POST"])  # commit a recipe to the db
def post_recipes():
    # TODO: data validation
    form = RecipeForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
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

        return recipe.to_dict()
    return {'errors': ['Internal Server Error']}, 500
