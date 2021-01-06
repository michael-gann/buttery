from .db import db


class Measurement(db.Model):
    __tablename__ = 'measurements'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    recipe_ingredients = db.relationship(
        "Recipe_Ingredient", back_populates="measurements")
    pantry_ingredients = db.relationship(
        "Pantry_Ingredients", back_populates="measurements")
