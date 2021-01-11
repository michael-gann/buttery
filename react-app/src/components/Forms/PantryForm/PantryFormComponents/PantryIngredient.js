import React from "react";

import Ingredient from "../../RecipeForm/RecipeFormComponents/Ingredient";
import MeasurementSelect from "../../RecipeForm/RecipeFormComponents/MeasurementSelect";
import Quantity from "../../RecipeForm/RecipeFormComponents/Quantity";

const PantryIngredient = ({
  measurements,
  ingredients,
  ingredientFields,
  handleIngredientAdd,
  handleIngredientRemove,
  handleUpdateIngredient,
}) => {
  return (
    <>
      <button type="button" onClick={() => handleIngredientAdd()}>
        Add ingredient
      </button>
      {ingredientFields.map((field, idx) => {
        return (
          <div key={`${idx}`}>
            <Quantity
              idx={idx}
              value={field}
              handleUpdateIngredient={handleUpdateIngredient}
            />
            <MeasurementSelect
              idx={idx}
              value={field}
              measurements={measurements}
              handleUpdateIngredient={handleUpdateIngredient}
            />
            <Ingredient
              idx={idx}
              value={field}
              ingredients={ingredients}
              handleUpdateIngredient={handleUpdateIngredient}
            />
            <button
              type="button"
              onClick={() => handleIngredientRemove(idx)}
            ></button>
          </div>
        );
      })}
    </>
  );
};

export default PantryIngredient;
