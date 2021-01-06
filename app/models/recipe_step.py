from .db import db


class RecipeStep(db.Model):
    __tablename__ = 'recipe_steps'

    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)
    step_number = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    recipes = db.relationship("Recipe", back_populates="recipe_steps")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
