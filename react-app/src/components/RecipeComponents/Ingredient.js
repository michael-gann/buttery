import React from "react";

const Ingredient = ({ ingredient }) => {
  return (
    <>
      <div>{ingredient ? ingredient.quantity : ""}</div>
      <div>{ingredient ? ingredient.measurement.name : ""}</div>
      <div>{ingredient ? ingredient.ingredient.name : ""}</div>
    </>
  );
};

export default Ingredient;
