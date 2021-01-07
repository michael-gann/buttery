from flask_wtf import FlaskForm
from wtforms import FormField, FieldList
from . import PantryIngredientForm


class PantryItemsForm(FlaskForm):
    pantry_ingredients = FieldList(FormField(PantryIngredientForm))
