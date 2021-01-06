from .db import db


class Pantry_Ingredient(db.Model):
    __tablename__ = 'pantry_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    ingredient_id = db.Column(db.Integer, db.ForeignKey(
        "ingredients.id"), nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey(
        "measurements.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    users = db.relationship("User", back_populates="pantry_ingredients")
    ingredients = db.relationship(
        "Ingredient", back_populates="pantry_ingredients")
    measurements = db.relationship(
        "Measurement", back_populates="pantry_ingredients")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "ingredient_id": self.ingredient_id,
            "measurement_id": self.measurement_id,
            "quantity": self.quantity
        }
