from .db import db


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    users = db.relationship("User", back_populates="recipes")
    recipe_steps = db.relationship("RecipeStep", back_populates="recipes")
    cooking_lists = db.relationship("CookingList", back_populates="recipes")
    recipe_ingredients = db.relationship(
        "RecipeIngredient", back_populates="recipes")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
