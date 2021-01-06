from app.models import db, RecipeIngredient

# Adds a demo user, you can add other users here if you want


def seed_recipe_ingredients():

    demo = RecipeIngredient(
        recipe_id=1, ingredient_id=1, measurement_id=16, quantity=12.00)
    demo1 = RecipeIngredient(
        recipe_id=1, ingredient_id=2, measurement_id=3, quantity=2.00)
    demo2 = RecipeIngredient(
        recipe_id=1, ingredient_id=3, measurement_id=2, quantity=0.25)
    demo3 = RecipeIngredient(
        recipe_id=1, ingredient_id=5, measurement_id=3, quantity=6.00)
    demo4 = RecipeIngredient(
        recipe_id=1, ingredient_id=8, measurement_id=2, quantity=2.5)
    demo5 = RecipeIngredient(
        recipe_id=1, ingredient_id=9, measurement_id=2, quantity=1.00)
    demo6 = RecipeIngredient(
        recipe_id=1, ingredient_id=10, measurement_id=2, quantity=0.25)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=2, measurement_id=4, quantity=0.75)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=3, measurement_id=2, quantity=0.75)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=12, measurement_id=17, quantity=3.00)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=15, measurement_id=4, quantity=0.75)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=17, measurement_id=5, quantity=15.00)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=13, measurement_id=17, quantity=3.00)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=18, measurement_id=4, quantity=0.75)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=19, measurement_id=4, quantity=0.25)
    demo7 = RecipeIngredient(
        recipe_id=1, ingredient_id=2, measurement_id=4, quantity=0.75)

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_recipe_ingredients():
    db.session.execute('TRUNCATE recipe_ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
