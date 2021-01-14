from app.models import db, Recipe

# Adds a demo user, you can add other users here if you want


def seed_recipes():

    demo = Recipe(user_id=1, name="Pumpkin Chiffon Pie")
    demo1 = Recipe(user_id=1, name="Basic Pancakes")
    demo2 = Recipe(user_id=1, name="Fluffy Homemade Waffles")
    # demo = Recipe(user_id=1, name="Pumpkin Chiffon Pie")
    # demo = Recipe(user_id=1, name="Pumpkin Chiffon Pie")

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()
