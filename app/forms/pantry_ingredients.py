from wtforms import IntegerField, Form, FloatField
from wtforms.validators import DataRequired


class PantryIngredientForm(Form):
    user_id = IntegerField('userId', validators=[DataRequired()])
    ingredient_id = IntegerField('ingredientId', validators=[DataRequired()])
    measurement_id = IntegerField('measurementId', validators=[DataRequired()])
    quantity = FloatField('quantity', validators=[DataRequired()])
