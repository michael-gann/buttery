from .db import db


class Ingredient_Type(db.Model):
    __tablename__ = 'ingredient_types'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    ingredients = db.relationship(
        "Ingredient", back_populates="ingredient_types")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }
