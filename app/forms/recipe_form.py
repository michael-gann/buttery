from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class RecipeForm(FlaskForm):
    user_id = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    content = StringField('content')
