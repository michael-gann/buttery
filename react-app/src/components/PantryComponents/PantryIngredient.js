import React from "react";

const PantryIngredients = ({ ingredient }) => {
  return (
    <>
      <div>{ingredient.quantity}</div>
      <div>{ingredient.measurement.name}</div>
      <div>{ingredient.ingredient.name}</div>
    </>
  );
};

export default PantryIngredients;
