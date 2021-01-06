from app.models import db, Ingredient

# Adds a demo user, you can add other users here if you want


def seed_ingredients():

    demo = Ingredient(name="Graham Cracker", type=4)
    demo1 = Ingredient(name="Sugar", type=4)
    demo2 = Ingredient(name="Salt", type=4)
    demo3 = Ingredient(name="Unsalted Butter", type=4)
    demo4 = Ingredient(name="Melted Unsalted Butter", type=4)
    demo5 = Ingredient(name="Salted Butter", type=4)
    demo6 = Ingredient(name="Melted Salted Butter", type=4)
    demo7 = Ingredient(name="Gelatin", type=4)
    demo8 = Ingredient(name="Cinnamon", type=4)
    demo9 = Ingredient(name="Nutmeg", type=4)
    demo10 = Ingredient(name="Egg", type=4)
    demo11 = Ingredient(name="Egg Yolk", type=4)
    demo12 = Ingredient(name="Egg White", type=4)
    demo13 = Ingredient(name="Milk", type=4)
    demo14 = Ingredient(name="Whole Milk", type=4)
    demo15 = Ingredient(name="2% Milk", type=4)
    demo16 = Ingredient(name="Unsweetened Pumpkin Purée", type=4)
    demo17 = Ingredient(name="Heavy Cream", type=4)
    demo18 = Ingredient(name="Sour Cream", type=4)
    demo19 = Ingredient(name="Egg", type=4)

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
    db.session.add(demo19)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
