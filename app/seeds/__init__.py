from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .recipe_steps import seed_recipe_steps, undo_recipe_steps
from .ingredient_types import seed_ingredient_types, undo_ingredient_types
from .ingredients import seed_ingredients, undo_ingredients
from .measurements import seed_measurements, undo_measurements
from .recipe_ingredients import seed_recipe_ingredients, undo_recipe_ingredients
from .pantry_ingredients import seed_pantry_ingredients, undo_pantry_ingredients

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_recipes()
    seed_recipe_steps()
    seed_ingredient_types()
    seed_ingredients()
    seed_measurements()
    seed_recipe_ingredients()
    seed_pantry_ingredients()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_recipes()
    undo_recipe_steps()
    undo_ingredient_types()
    undo_ingredients()
    undo_measurements()
    undo_recipe_ingredients()
    undo_pantry_ingredients()
    # Add other undo functions here
