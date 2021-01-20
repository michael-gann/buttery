# buttery

buttery lets you add your own recipes and create a virtual pantry to keep track of your pantry's ingredients. You can add recipes you want to make to your cooking list and receive a shopping list of items needed based off of your pantry stock.

COMING SOON (You can then mark recipes as "shopped" to update your Pantry and then mark them as "made" to update your pantry stock.)

## DB Schema

![buttery db schema](https://i.imgur.com/kdGlheD.png)

## User Auth

Users can sign-up and login.

- sign-up
- login/logout
- access to site requires authentication

## Pantry

A user can add ingredients to their virtual pantry to reflect their current real life stock of ingredients. Doing so enables the app to generate
shopping lists and also recommend recipes to the user based on how close they are to already being able to make it with what they have in stock.

- dynamic form for adding/editing ingredients 
- clean view of pantry to see what you have in stock
- ability to edit an ingredients quantity manually 

## Shopping List

A user can generate a shopping list based on recieps they add as "want to make". The app knows what ingredients aren't in the pantry or if making a recipe will cause you to run out of an ingredient, so you should buy more.

COMIGN SOON ( you can click "shopped" to have those ingredients updated in their pantry)

- display items in easy to read list
- state for shopping list (shopping / shopped)

## Recipes

A user can add recipes to keep track of for easy reference and to get recomendations for what they can make based on the stock of their pantry.
Users will get a colored number indicator on a recipe for how close they are to being able to make a recipe for a quick visual cue as to what is possible. On the homepage recipes will be sorted in order of closest to make to unable to make. On the recipe page where ingredients are listed there will be color indicators to let a user know if they will run out of an ingredient if they make the recipe or will cause them to run out so they should buy more.

- Add/edit/delete recipe
- Mark recipe state (want-to-make / shopping / shopped / made) to update pantry/shopping list
- Recommended recipes you can currently make (or can almost make)


## Stretch Goals - Future Ideas

- Search recipes
- Recipes can be public/private to allow ability to share/modify recipes with other users
- comment/add notes to recipes
- Favorites
- recipe categories
- different measurement units conversion

# Routes
Mostly RESTful endpoints for buttery. Data api endpoints are prepended with /api and follow RESTful convention except where a more descriptive name is... well, more descriptive.

## Backend

**/api**

### User

- ["GET"] /auth 
- ["POST"] /auth/login
- ["GET"] /auth/logout
- ["POST"] /auth/signup

### Recipe

- ["GET", "POST"] /recipes
- ["GET", "DELETE"] /recipes/id

### Pantry

- ["GET"] /pantries/user-pantry
- ["PUT"] /pantries/update-pantry

### Ingredient

- ["GET"] /ingredients

### Measurement

- ["GET"] /measurements

### Cooking List

- ["GET", "POST"] /cooking-lists/shopping-list
- ["POST"] /cooking-lists/mark-shopped
- ["POST"] /cooking-lists/mark-cooked

## Frontend

 - "/" Splash
 - "/home" Home (Dashboard View)
 - "/pantry" Pantry Page
 - "recipes" Recipes Page
 - "recipe/id" A Recipe
