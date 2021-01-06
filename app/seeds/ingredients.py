from app.models import db, Ingredient

# Adds a demo user, you can add other users here if you want


def seed_ingredients():

    demo = Ingredient(name="Graham Cracker", type_id=1)
    demo1 = Ingredient(name="Sugar", type_id=1)
    demo2 = Ingredient(name="Salt", type_id=2)
    demo3 = Ingredient(name="Unsalted Butter", type_id=3)
    demo4 = Ingredient(name="Melted Unsalted Butter", type_id=3)
    demo5 = Ingredient(name="Salted Butter", type_id=3)
    demo6 = Ingredient(name="Melted Salted Butter", type_id=3)
    demo7 = Ingredient(name="Gelatin", type_id=1)
    demo8 = Ingredient(name="Ground Cinnamon", type_id=2)
    demo9 = Ingredient(name="Ground Nutmeg", type_id=1)
    demo10 = Ingredient(name="Egg", type_id=3)
    demo11 = Ingredient(name="Egg Yolk", type_id=3)
    demo12 = Ingredient(name="Egg White", type_id=3)
    demo13 = Ingredient(name="Milk", type_id=3)
    demo14 = Ingredient(name="Whole Milk", type_id=3)
    demo15 = Ingredient(name="2% Milk", type_id=3)
    demo16 = Ingredient(name="Unsweetened Pumpkin Purée", type_id=1)
    demo17 = Ingredient(name="Heavy Cream", type_id=3)
    demo18 = Ingredient(name="Sour Cream", type_id=3)

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
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
    # db.session.add(demo19)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
