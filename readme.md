# larder

Recipe App lets you add recipes to your recipebook (maybe by category)
and create a Pantry of the current stock of ingredients you have.
You can mark recipes as "want to make" and receive a shopping list of
items needed based off of your pantry. You can then mark recipes as "post-shop"
to update your Pantry and even mark them as "made" to update your pantry stock (maybe have
some indicator when submitting that maybe you used more than an ingredient to update it before submitting).

Will have a list of defined ingredients/quantities/measurement-units users can select when adding recipes and if it doesn't
exist they can create their own igredient item for their recipe (possible problems with stocking pantry if item name varies from already
tracked item)

## DB Schema

- Create table of item types/txt file of defined ingredients
- Units of measurement/Quantity
- Recipe body (one chunk or steps)
-

## User Auth

- sign-up
- login/logout

## Pantry

- +button to open dropdowns to select/type and add ingredients (auto-complete if in dict)
- update pantry button (probably by category to keep organized ie. spices / baking / meat / etc.)

## Shopping List

- create/update/delete items in easy to read list
- state for shopping list (shopping / shopped)

## Recipe Book

- Add new recipe
- Mark recipe state (want-to-make / shopping / shopped / made) to update pantry/shopping list
- Recommended recipes you can currently make (or can almost make)
- Favorite sections

## Follow

- Users can follow/unfollow other users
- when following a user can see their recipes marked as their favorite

## Stretch Goals - Future Ideas

- Search my recipes by ingredient
- Recipes can be public/private to allow ability to share/modify recipes with other users
- comment/add notes to recipes

# Routes

## Backend

**/api**

## Frontend
