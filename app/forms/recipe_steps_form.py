from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class RecipeStepForm(FlaskForm):
    recipe_id = IntegerField('recipeId', validators=[DataRequired()])
    step_number = IntegerField('stepNumber', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
