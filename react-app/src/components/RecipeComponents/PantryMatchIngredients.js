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

  let count = 0;

  for (const key in ingredientsInPantry) {
    if (pantryIngredientByIngredientId[key] === undefined) {
      ingredientsInPantry[key].quantity = 0;
      ingredientsInPantry[key].doNotHave = true;
      ingredientsInPantry[key].willRunOut = true;
      ingredientsInPantry[key].notEnough = true;
      ingredientsInPantry[key].haveEnough = false;
    } else {
      ingredientsInPantry[key].quantity =
        pantryIngredientByIngredientId[key].quantity;
      ingredientsInPantry[key].willRunOut =
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key].quantity <=
        0;
      ingredientsInPantry[key].haveEnough =
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key].quantity ===
        0;
      ingredientsInPantry[key].notEnough =
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key].quantity <
        0;
      ingredientsInPantry[key].doNotHave = false;
    }
    if (
      !(
        ingredientsInPantry[key].notEnough ||
        ingredientsInPantry[key].willRunOut ||
        ingredientsInPantry[key].doNotHave
      )
    ) {
    } else if (
      !(
        ingredientsInPantry[key].notEnough &&
        ingredientsInPantry[key].willRunOut &&
        ingredientsInPantry[key].doNotHave
      )
    ) {
      count++;
    } else {
      count++;
    }

    if (ingredientsInPantry[key].haveEnough) {
      count--;
    }
  }

  // console.log(ingredientsInPantry);

  const ingredientsInPantryArray = Object.values(ingredientsInPantry).sort(
    (a, b) => a.id - b.id
  );

  for (const key in ingredientsInPantry) {
    if (pantryIngredientByIngredientId[key]) {
      if (
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key] <=
          0 ||
        pantryIngredientByIngredientId[key].quantity -
          ingredientsByIngredientId[key] <
          0 ||
        ingredientsInPantry[key].quantity === 0
      ) {
      }
    }
  }

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
