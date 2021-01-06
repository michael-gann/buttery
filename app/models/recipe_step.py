from .db import db


class Recipe_Step(db.Model):
    __tablename__ = 'recipe_steps'

    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)
    step_number = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String)

    recipes = db.relationship("Recipe", back_populates="recipe_steps")
