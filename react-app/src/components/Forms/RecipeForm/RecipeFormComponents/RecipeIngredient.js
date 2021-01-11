import React from "react";
import MeasurementSelect from "./MeasurementSelect";
import Quantity from "./Quantity";
import Ingredient from "./Ingredient";

const RecipeIngredient = ({
  measurements,
  ingredientFields,
  ingredients,
  handleRecipeIngredientAdd,
  handleUpdateIngredient,
  handleRecipeIngredientRemove,
}) => {
  return (
    <>
      <button type="button" onClick={() => handleRecipeIngredientAdd()}>
        add ingredient
      </button>
      {ingredientFields.map((field, idx) => {
        return (
          <div key={`${idx}`}>
            {`ingredient ${idx + 1}`}
            <Quantity
              idx={idx}
              value={field}
              handleUpdateIngredient={handleUpdateIngredient}
            ></Quantity>
            <MeasurementSelect
              handleUpdateIngredient={handleUpdateIngredient}
              measurements={measurements}
              value={field}
              idx={idx}
            ></MeasurementSelect>
            <Ingredient
              ingredients={ingredients}
              value={field}
              idx={idx}
              handleUpdateIngredient={handleUpdateIngredient}
            ></Ingredient>
            <button
              type="button"
              onClick={() => handleRecipeIngredientRemove(idx)}
            >
              remove ingredient
            </button>
          </div>
        );
      })}
    </>
  );
};

export default RecipeIngredient;
