from app.models import db, IngredientType

# Adds a demo user, you can add other users here if you want


def seed_ingredient_types():

    demo = IngredientType(name="Baking")
    demo = IngredientType(name="Spice")
    demo = IngredientType(name="Dairy")
    demo = IngredientType(name="Bread")
    demo = IngredientType(name="Refrigerated")
    demo = IngredientType(name="Refrigerated")
    demo = IngredientType(name="Refrigerated")
    demo = IngredientType(name="Refrigerated")
    demo = IngredientType(name="Refrigerated")
    demo = IngredientType(name="Refrigerated")

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_ingredient_types():
    db.session.execute('TRUNCATE ingredient_types RESTART IDENTITY CASCADE;')
    db.session.commit()
