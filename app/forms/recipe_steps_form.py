from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, Form
from wtforms.validators import DataRequired


class RecipeStepForm(Form):
    step_number = IntegerField('stepNumber', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
