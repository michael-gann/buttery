from app.models import db, Recipe

# Adds a demo user, you can add other users here if you want


def seed_recipes():

    demo = Recipe(user_id=1, name="Pumpkin Chiffon Pie", content="This light-as-can-be pumpkin chiffon pie gets its cloudlike texture from the addition of beaten raw egg whites. Be sure to take them all the way to stiff peaks for a slice of pie that can hold its shape. Parbaking the graham cracker crust at a relatively low temperature for a longer period of time ensures a crisp and deeply fragrant crust that won’t become soggy once the pumpkin filling is added.")
    demo1 = Recipe(user_id=1, name="Basic Pancakes",
                   content="These basic pancakes might seem basic, but once you make them they're sure to change your mind!")
    demo2 = Recipe(user_id=1, name="Fluffy Homemade Waffles",
                   content="These waffles are fantastic. Add some strawberries and whipped cream for a decadent breakfast.")
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
