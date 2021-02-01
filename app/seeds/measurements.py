from app.models import db, Measurement

# Adds a demo user, you can add other users here if you want


def seed_measurements():

    demo = Measurement(name="pinch")
    demo1 = Measurement(name="teaspoon")
    demo2 = Measurement(name="tablespoon")
    demo3 = Measurement(name="cup")
    demo4 = Measurement(name="ounce")
    demo5 = Measurement(name="fluid ounce")
    demo6 = Measurement(name="litre")
    demo7 = Measurement(name="gallon")
    demo8 = Measurement(name="pint")
    demo9 = Measurement(name="quart")
    demo10 = Measurement(name="mililitre")
    demo11 = Measurement(name="gram")
    demo12 = Measurement(name="pound")
    demo13 = Measurement(name="shot")
    demo14 = Measurement(name="inch")
    demo15 = Measurement(name="unit")
    demo16 = Measurement(name="large")
    demo17 = Measurement(name="medium")
    demo18 = Measurement(name="small")
    demo19 = Measurement(name="sprig")

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


def undo_measurements():
    db.session.execute('TRUNCATE measurements RESTART IDENTITY CASCADE;')
    db.session.commit()
