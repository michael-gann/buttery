from app.models import db, RecipeStep

# Adds a demo user, you can add other users here if you want


def seed_recipe_steps():

    chiffon = RecipeStep(recipe_id=1, step_number=1, content='''Preheat oven
     to 325°. Pulse graham crackers in a food processor until broken down
     into fine crumbs (you should have about 2 cups). Set aside 2 Tbsp.
     graham cracker crumbs for serving. Add sugar and salt and pulse just
     to combine. Add butter and pulse until mixture is the consistency of
     wet sand.''')
    chiffon1 = RecipeStep(recipe_id=1, step_number=2, content='''Transfer
    to a 9½\"-diameter deep pie dish. Using a measuring cup, press crumbs
    firmly onto bottom and up sides of dish. Bake crust until fragrant and
    edges just start to take on color, 20–25 minutes. Transfer to a wire
    rack and let cool.''')
    chiffon2 = RecipeStep(recipe_id=1, step_number=3, content='''Stir gelatin,
     cinnamon, nutmeg, a scant ½ cup sugar, and ½ tsp. salt in a small
     saucepan. Whisk egg yolks and milk in a small bowl to
     combine, then whisk into sugar mixture. Cook over medium
      heat, stirring frequently, until mixture begins to
      thicken and coats the back of a spoon (but do not
      let it boil), about 5 minutes. Stir in pumpkin
      purée and remove from heat. Transfer to a large
       bowl and chill until cool, about 10 minutes.''')
    chiffon3 = RecipeStep(recipe_id=1, step_number=4, content='''Meanwhile,
    using an electric mixer on medium-high speed, beat egg whites in a large
    bowl until soft peaks form. With the motor running, gradually add a scant
    ¼ cup sugar and continue to beat until stiff peaks form, 5–7 minutes.''')
    chiffon4 = RecipeStep(recipe_id=1, step_number=5,
                          content='''Mix one-third of egg white mixture into
                          chilled pumpkin mixture until smooth. Gently fold
                          remaining egg white mixture into pumpkin mixture
                          in 2 additions until incorporated, but don’t
                           overmix.''')
    chiffon5 = RecipeStep(recipe_id=1, step_number=6,
                          content='''Pour filling into graham cracker crust;
                          smooth top. Cover and chill overnight.''')
    chiffon6 = RecipeStep(recipe_id=1, step_number=7, content='''Vigorously
    whisk cream in a large bowl until medium peaks form. Fold in sour cream
    and remaining 2 Tbsp. sugar and ¼ tsp. salt just to combine. If the
    cream looks like it could use another whisk or two to hold medium
    peaks, give it a whisk until it reaches the desired consistency.
    Using a large spoon, dollop a generous amount of whipped cream in
    the center of pie. Sprinkle with reserved graham cracker crumbs.
    Slice and serve with any remaining whipped cream alongside.''')
    pancakes = RecipeStep(recipe_id=2, step_number=1,
                          content='''In a large bowl, mix flour,
                          sugar, baking powder and salt. Make a well
                          in the center, and pour in milk, egg and
                          oil. Mix until smooth.''')
    pancakes1 = RecipeStep(recipe_id=2, step_number=2,
                           content='''Heat a lightly oiled griddle
                           or frying pan over medium high heat.
                           Pour or scoop the batter onto the
                           griddle, using approximately 1/4 cup
                           for each pancake. Brown on both sides
                           and serve hot.''')
    waffles = RecipeStep(recipe_id=3, step_number=1,
                         content='''Preheat waffle iron according
                         to manufacturer's directions.''')
    waffles1 = RecipeStep(recipe_id=3, step_number=2,
                          content='''Place flour, baking powder,
                           sugar and salt in a bowl. Whisk to
                           combine.''')
    waffles2 = RecipeStep(recipe_id=3, step_number=3,
                          content='''In a small bowl, mix
                          egg yolks, milk and butter. Set aside.''')
    waffles3 = RecipeStep(recipe_id=3, step_number=4,
                          content='''In a separate bowl,
                          beat egg whites with a mixer on medium
                          high speed until stiff peaks form.''')
    waffles4 = RecipeStep(recipe_id=3, step_number=5,
                          content='''Add egg yolk mixture to
                          flour mixture and stir to combine.
                          Fold in egg whites''')
    waffles5 = RecipeStep(recipe_id=3, step_number=6,
                          content='''Drop by large spoonfuls
                          onto greased waffle iron, close
                          the lid and cook about 3-5 minutes.''')

    db.session.add(chiffon)
    db.session.add(chiffon1)
    db.session.add(chiffon2)
    db.session.add(chiffon3)
    db.session.add(chiffon4)
    db.session.add(chiffon5)
    db.session.add(chiffon6)
    db.session.add(pancakes)
    db.session.add(pancakes1)
    db.session.add(waffles)
    db.session.add(waffles1)
    db.session.add(waffles2)
    db.session.add(waffles3)
    db.session.add(waffles4)
    db.session.add(waffles5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the recipe table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_recipe_steps():
    db.session.execute('TRUNCATE recipe_steps RESTART IDENTITY CASCADE;')
    db.session.commit()
