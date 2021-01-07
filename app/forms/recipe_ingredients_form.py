from wtforms import IntegerField, Form
from wtforms.validators import DataRequired


class RecipeIngredientForm(Form):
    ingredient_id = IntegerField('ingredientId', validators=[DataRequired()])
    measurement_id = IntegerField('measurementId', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
