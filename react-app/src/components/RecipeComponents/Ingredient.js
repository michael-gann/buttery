import React from "react";

const Ingredient = ({ ingredient }) => {
  return (
    <>
      <div className="quantity">{ingredient ? ingredient.quantity : ""}</div>
      <div className="measurement-name">
        {ingredient ? ingredient.measurement.name : ""}
      </div>
      <div className="ingredient-name">
        {ingredient ? ingredient.ingredient.name : ""}
      </div>
    </>
  );
};

export default Ingredient;
