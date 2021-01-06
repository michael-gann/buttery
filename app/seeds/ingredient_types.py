from app.models import db, Ingredient_Type

# Adds a demo user, you can add other users here if you want


def seed_ingredient_types():

    demo = Ingredient_Type(name="Baking")
    demo = Ingredient_Type(name="Spice")
    demo = Ingredient_Type(name="Dairy")
    demo = Ingredient_Type(name="Bread")
    demo = Ingredient_Type(name="Refrigerated")
    demo = Ingredient_Type(name="Refrigerated")
    demo = Ingredient_Type(name="Refrigerated")
    demo = Ingredient_Type(name="Refrigerated")
    demo = Ingredient_Type(name="Refrigerated")
    demo = Ingredient_Type(name="Refrigerated")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_ingredient_types():
    db.session.execute('TRUNCATE ingredient_types RESTART IDENTITY CASCADE;')
    db.session.commit()
