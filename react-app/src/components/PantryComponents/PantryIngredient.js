import React from "react";

const PantryIngredients = ({ ingredient }) => {
  return (
    <>
      <div className="pantry-ingredient-quantity">{ingredient.quantity}</div>
      <div className="pantry-ingredient-measurement">
        {ingredient.measurement.name}
      </div>
      <div className="pantry-ingredient-ingredient">
        {ingredient.ingredient.name}
      </div>
    </>
  );
};

export default PantryIngredients;
