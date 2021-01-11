from .recipe_ingredients_form import RecipeIngredientForm
from .recipe_steps_form import RecipeStepForm
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FieldList, FormField


class RecipeForm(FlaskForm):
    recipe_id = IntegerField('recipe_id')
    user_id = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    content = StringField('content')
    steps = FieldList(FormField(RecipeStepForm))
    ingredients = FieldList(FormField(RecipeIngredientForm))
