import React from "react";
import { useSelector } from "react-redux";

import Ingredient from "./Ingredient";

const PantryMatchIngredients = ({ ingredients }) => {
  const pantryIngredients = useSelector((state) => state.pantries.pantries);
  const isInPantry = true;
  let pantryIngredientByIngredientId = {};

  for (const i of pantryIngredients) {
    pantryIngredientByIngredientId[i.ingredient_id] = i;
  }

  const ingredientsByIngredientId = {};

  for (const i of Object.values(ingredients)) {
    ingredientsByIngredientId[i.ingredient_id] = i;
  }

  const ingredientsInPantry = {};

  for (const key in ingredientsByIngredientId) {
    if (!ingredientsInPantry[key]) {
      ingredientsInPantry[key] = {
        ...ingredientsByIngredientId[key],
        ...ingredientsInPantry[key],
      };
    }
  }

  for (const key in ingredientsInPantry) {
    if (pantryIngredientByIngredientId[key] === undefined) {
      ingredientsInPantry[key].quantity = 0;
      ingredientsInPantry[key].doNotHave = true;
    } else {
      ingredientsInPantry[key].quantity =
        pantryIngredientByIngredientId[key].quantity;
      ingredientsInPantry[key].willRunOut =
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key].quantity <=
        0;
    }
  }

  const ingredientsInPantryArray = Object.values(ingredientsInPantry).sort(
    (a, b) => a.id - b.id
  );

  // TODO: check amounts of recipe against pantry, if would go 0, red, if would get close
  // to being out, yellow, if not, green. i.e. like the recipe badges
  // const isClose =
  // ingredient.quantity - pantryIngredient.quantity > 0 &&
  // ingredient.quantity - pantryIngredient.quantity <= 3;
  //   const willRunOut = ingredient.quantity - pantryIngredient.quantity === 0;

  return (
    <>
      {ingredientsInPantryArray &&
        ingredientsInPantryArray.map((i, idx) => {
          return (
            <div className="recipe-pantry-ingredient-container" key={idx}>
              <Ingredient isInPantry={isInPantry} ingredient={i}></Ingredient>
            </div>
          );
        })}
    </>
  );
};

export default PantryMatchIngredients;