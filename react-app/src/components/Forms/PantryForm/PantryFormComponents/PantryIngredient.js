import React from "react";
import { ImMinus } from "react-icons/im";

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
      <div className="add-new-pantry-ingredient-button">
        <button type="button" onClick={() => handleIngredientAdd()}>
          <i className="fas fa-plus"></i>
          Add new ingredient
        </button>
      </div>
      {ingredientFields.map((field, idx) => {
        return (
          <div className="ingredient-fields" key={`${idx}`}>
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
            <button type="button" onClick={() => handleIngredientRemove(idx)}>
              <ImMinus />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default PantryIngredient;
