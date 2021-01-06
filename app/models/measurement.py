from .db import db


class Measurement(db.Model):
    __tablename__ = 'measurements'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    recipe_ingredients = db.relationship(
        "Recipe_Ingredient", back_populates="measurements")
    pantry_ingredients = db.relationship(
        "Pantry_Ingredient", back_populates="measurements")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
