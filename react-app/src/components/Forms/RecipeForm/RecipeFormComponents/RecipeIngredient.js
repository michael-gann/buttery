import React from "react";
import MeasurementSelect from "./MeasurementSelect";
import Quantity from "./Quantity";
import Ingredient from "./Ingredient";
import { ImMinus } from "react-icons/im";

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
      <div className="add-new-recipe-ingredient-button">
        <button type="button" onClick={() => handleRecipeIngredientAdd()}>
          <i className="fas fa-plus"></i>
          Add new ingredient
        </button>
      </div>
      {ingredientFields.map((field, idx) => {
        return (
          <div className="ingredient-fields" key={`${idx}`}>
            {/* {`${idx + 1}`} */}
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
            <div className="recipe-ingredient-remove-button">
              <button
                type="button"
                onClick={() => handleRecipeIngredientRemove(idx)}
              >
                <ImMinus />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecipeIngredient;
