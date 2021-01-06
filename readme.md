# buttery

buttery lets you add recipes and create a pantry keep track of your pantry's ingredients. You can mark recipes as "want to make" and receive a shopping list of items needed based off of your pantry. You can then mark recipes as "post-shop" to update your Pantry and even mark them as "made" to update your pantry stock.

Will have a list of defined ingredients/quantities/measurement-units users can select when adding recipes and if it doesn't
exist they can create their own igredient item for their recipe.

## DB Schema

![buttery db schema](https://i.imgur.com/kdGlheD.png)

## User Auth

Users can sign-up and login.

- sign-up
- login/logout

## Pantry

A user can add ingredients to their pantry to reflect their current inventory of ingredients. Doing so enables the app to generate
shopping lists and also recommend recipes to the user based on how close they are to already being able to make it with what they have in stock.

- +button to open dropdowns to select/type and add ingredients (auto-complete if in dict)
- update pantry button (probably by category to keep organized ie. spices / baking / meat / etc.)

## Shopping List

A user gets a shopping list based on recieps they add as "want to make". When added a dynamic list will appear allowing users to manually edit values
or accept the values provided. There will be color indicators to let a user know if they already have an item but an added recipe will cause them to run out so they need to buy more. They can click "shopped" to have those ingredients updated in their pantry. 

- create/update/delete items in easy to read list
- state for shopping list (shopping / shopped)

## Recipes

A user can add recipes to keep track of for easy reference and to get recomendations for what they can make based on the stock of their pantry.
Users will get an indicator on a recipe for how close they are to being able to make a recipe. On the homepage recipes will be sorted in order of closest to make to unable to make.

- Add new recipe
- Mark recipe state (want-to-make / shopping / shopped / made) to update pantry/shopping list
- Recommended recipes you can currently make (or can almost make)


## Stretch Goals - Future Ideas

- Search recipes
- Recipes can be public/private to allow ability to share/modify recipes with other users?
- comment/add notes to recipes
- (Favorite sections?)
- recipe categories

# Routes

## Backend

**/api**

- /users
- /users/id
- /recipes
- /recipes/id
- /pantries/
- /pantries/id
- /ingredients
- /measurements
- /shopping-list
- /shopping-list/id
- /mark-shopped

## Frontend

 - "/" Home
 - "/pantry" Pantry
 - "recipes" Recipes
 - "recipe/id" One Recipe
 - "shopping-list/id" Shopping List
