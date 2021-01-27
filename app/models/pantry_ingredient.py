from .db import db


class PantryIngredient(db.Model):
    __tablename__ = 'pantry_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    ingredient_id = db.Column(db.Integer, db.ForeignKey(
        "ingredients.id"), nullable=False)
    measurement_id = db.Column(db.Integer, db.ForeignKey(
        "measurements.id"), nullable=False)
    quantity = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    users = db.relationship("User", back_populates="pantry_ingredients")
    ingredients = db.relationship(
        "Ingredient", back_populates="pantry_ingredients")
    measurements = db.relationship(
        "Measurement", back_populates="pantry_ingredients")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
