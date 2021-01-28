from app.models import db, RecipeIngredient

# Adds a demo user, you can add other users here if you want


def seed_recipe_ingredients():

    demo = RecipeIngredient(
        recipe_id=1, ingredient_id=1, measurement_id=16, quantity=12.00)
    demo3 = RecipeIngredient(
        recipe_id=1, ingredient_id=5, measurement_id=3, quantity=6.00)
    demo4 = RecipeIngredient(
        recipe_id=1, ingredient_id=8, measurement_id=2, quantity=2.5)
    demo5 = RecipeIngredient(
        recipe_id=1, ingredient_id=9, measurement_id=2, quantity=1.00)
    demo6 = RecipeIngredient(
        recipe_id=1, ingredient_id=10, measurement_id=2, quantity=0.25)
    demo8 = RecipeIngredient(
        recipe_id=1, ingredient_id=3, measurement_id=2, quantity=0.75)
    demo9 = RecipeIngredient(
        recipe_id=1, ingredient_id=12, measurement_id=17, quantity=3.00)
    demo10 = RecipeIngredient(
        recipe_id=1, ingredient_id=15, measurement_id=4, quantity=0.75)
    demo11 = RecipeIngredient(
        recipe_id=1, ingredient_id=17, measurement_id=5, quantity=15.00)
    demo12 = RecipeIngredient(
        recipe_id=1, ingredient_id=13, measurement_id=17, quantity=3.00)
    demo13 = RecipeIngredient(
        recipe_id=1, ingredient_id=18, measurement_id=4, quantity=0.75)
    demo14 = RecipeIngredient(
        recipe_id=1, ingredient_id=19, measurement_id=4, quantity=0.25)
    demo15 = RecipeIngredient(
        recipe_id=1, ingredient_id=2, measurement_id=4, quantity=0.75)
    demo16 = RecipeIngredient(
        recipe_id=2, ingredient_id=19, measurement_id=4, quantity=1)
    demo17 = RecipeIngredient(
        recipe_id=2, ingredient_id=2, measurement_id=4, quantity=2)
    demo18 = RecipeIngredient(
        recipe_id=2, ingredient_id=44, measurement_id=2, quantity=2)
    demo20 = RecipeIngredient(
        recipe_id=2, ingredient_id=11, measurement_id=17, quantity=1)
    demo21 = RecipeIngredient(
        recipe_id=2, ingredient_id=14, measurement_id=4, quantity=1)
    demo22 = RecipeIngredient(
        recipe_id=2, ingredient_id=24, measurement_id=3, quantity=2)
    demo23 = RecipeIngredient(
        recipe_id=3, ingredient_id=19, measurement_id=4, quantity=2)
    demo24 = RecipeIngredient(
        recipe_id=3, ingredient_id=43, measurement_id=3, quantity=1)
    demo25 = RecipeIngredient(
        recipe_id=3, ingredient_id=3, measurement_id=2, quantity=.5)
    demo26 = RecipeIngredient(
        recipe_id=3, ingredient_id=2, measurement_id=4, quantity=2)
    demo27 = RecipeIngredient(
        recipe_id=3, ingredient_id=11, measurement_id=17, quantity=2)
    demo28 = RecipeIngredient(
        recipe_id=3, ingredient_id=14, measurement_id=4, quantity=1.66)
    demo29 = RecipeIngredient(
        recipe_id=3, ingredient_id=5, measurement_id=3, quantity=6)

    db.session.add(demo)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo20)
    db.session.add(demo21)
    db.session.add(demo22)
    db.session.add(demo23)
    db.session.add(demo24)
    db.session.add(demo25)
    db.session.add(demo26)
    db.session.add(demo27)
    db.session.add(demo28)
    db.session.add(demo29)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_recipe_ingredients():
    db.session.execute('TRUNCATE recipe_ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
