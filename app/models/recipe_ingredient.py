from .db import db


class Recipe_Ingredient(db.Model):
    __tablename__ = 'recipe_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)
    ingredient_id = db.Column(db.Integer, db.ForeignKey(
        "ingredients.id"), nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey(
        "measurements.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    recipes = db.relationship("Recipe", back_populates="recipe_ingredients")
    ingredients = db.relationship(
        "Ingredient", back_populates="recipe_ingredients")
    measurements = db.relationship(
        "Measurement", back_populates="recipe_ingredients")
