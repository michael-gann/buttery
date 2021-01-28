from app.models import db, PantryIngredient

# Adds a demo user, you can add other users here if you want


def seed_pantry_ingredients():

    demo = PantryIngredient(user_id=1, ingredient_id=19,
                            measurement_id=4, quantity=50)
    demo1 = PantryIngredient(user_id=1, ingredient_id=2,
                             measurement_id=4, quantity=100)
    demo2 = PantryIngredient(user_id=1, ingredient_id=3,
                             measurement_id=2, quantity=5)
    demo3 = PantryIngredient(user_id=1, ingredient_id=11,
                             measurement_id=17, quantity=12)
    demo4 = PantryIngredient(user_id=1, ingredient_id=14,
                             measurement_id=4, quantity=1)

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_pantry_ingredients():
    db.session.execute('TRUNCATE pantry_ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
