from flask_wtf import FlaskForm
from wtforms import IntegerField, Form
from wtforms.validators import DataRequired


class PantryIngredientForm(Form):
    user_id = IntegerField('userId', validators=[DataRequired()])
    ingredient_id = IntegerField('ingredientId', validators=[DataRequired()])
    measurement_id = IntegerField('measurementId', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
