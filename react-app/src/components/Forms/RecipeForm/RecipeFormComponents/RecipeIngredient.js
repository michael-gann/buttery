import React from "react";
import MeasurementSelect from "./MeasurementSelect";
import Quantity from "./Quantity";
import Ingredient from "./Ingredient";

const RecipeIngredient = ({
  measurements,
  measurement,
  setMeasurement,
  ingredientFields,
  ingredients,
  ingredient,
  setIngredient,
  handleRecipeIngredientAdd,
  handleRecipeIngredientChange,
  handleRecipeIngredientRemove,
}) => {
  return (
    <>
      <button type="button" onClick={() => handleRecipeIngredientAdd()}>
        add ingredient
      </button>
      {ingredientFields.map((field, idx) => {
        return (
          <div key={`${field.idx}`}>
            {`ingredient ${idx + 1}`}
            <Quantity
              idx={idx}
              value={field}
              handleRecipeIngredientChange={handleRecipeIngredientChange}
            ></Quantity>
            <MeasurementSelect
              handleRecipeIngredientChange={handleRecipeIngredientChange}
              measurements={measurements}
              measurement={measurement}
              setMeasurement={setMeasurement}
              value={field}
              idx={idx}
            ></MeasurementSelect>
            <Ingredient
              ingredients={ingredients}
              ingredient={ingredient}
              setIngredient={setIngredient}
              value={field}
              idx={idx}
              handleRecipeIngredientChange={handleRecipeIngredientChange}
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
      <div>
        {/* <Quantity></Quantity>
      </div>
      <div>
        <MeasurementSelect
          measurements={measurements}
          setMeasurement={setMeasurement}
        ></MeasurementSelect>
      </div>
      <div>
        <Ingredient></Ingredient> */}
      </div>
    </>
  );
};

export default RecipeIngredient;
