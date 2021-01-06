from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class IngredientForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    type_id = IntegerField('typeId', validators=[DataRequired()])
