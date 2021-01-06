from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class CookingListForm(FlaskForm):
    user_id = IntegerField('userId', validators=[DataRequired()])
    recipe_id = IntegerField('recipeId', validators=[DataRequired()])
