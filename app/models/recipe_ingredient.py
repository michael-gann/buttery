from .db import db


class RecipeIngredient(db.Model):
    __tablename__ = 'recipe_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)
    ingredient_id = db.Column(db.Integer, db.ForeignKey(
        "ingredients.id"), nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey(
        "measurements.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    recipes = db.relationship("Recipe", back_populates="recipe_ingredients")
    ingredients = db.relationship(
        "Ingredient", back_populates="recipe_ingredients")
    measurements = db.relationship(
        "Measurement", back_populates="recipe_ingredients")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
