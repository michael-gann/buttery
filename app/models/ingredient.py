from .db import db


class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    type_id = db.Column(db.Integer, db.ForeignKey(
        "ingredient_types.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    ingredient_types = db.relationship(
        "IngredientType", back_populates="ingredients")
    recipe_ingredients = db.relationship(
        "RecipeIngredient", back_populates="ingredients")
    pantry_ingredients = db.relationship(
        "PantryIngredient", back_populates="ingredients")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
