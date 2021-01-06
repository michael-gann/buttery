from app.models import db, IngredientType

# Adds a demo user, you can add other users here if you want


def seed_ingredient_types():

    demo = IngredientType(name="Dry/Baking")
    demo1 = IngredientType(name="Spice")
    demo2 = IngredientType(name="Dairy")
    demo3 = IngredientType(name="Bread")
    demo4 = IngredientType(name="Beverage")
    demo5 = IngredientType(name="Meat")
    demo6 = IngredientType(name="Produce")
    demo7 = IngredientType(name="Frozen")

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


def undo_ingredient_types():
    db.session.execute('TRUNCATE ingredient_types RESTART IDENTITY CASCADE;')
    db.session.commit()
