from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class RecipeIngredientForm(FlaskForm):
    recipe_id = IntegerField('recipeId', validators=[DataRequired()])
    ingredient_id = IntegerField('ingredientId', validators=[DataRequired()])
    measurement_id = IntegerField('measurementId', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
