from .db import db


class CookingList(db.Model):
    __tablename__ = 'cooking_lists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(),
                           server_onupdate=db.func.now())

    users = db.relationship("User", back_populates="cooking_lists")
    recipes = db.relationship("Recipe", back_populates="cooking_lists")

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
