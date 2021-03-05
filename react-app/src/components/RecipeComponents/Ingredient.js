import React, { useState, useEffect } from "react";

const isFloat = (n) => {
  if (typeof n == "number" && !isNaN(n)) {
    if (Number.isInteger(n)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const Ingredient = ({ ingredient, isInPantry }) => {
  const [isQFloat, setIsQFloat] = useState(false);
  const willRunOut = ingredient.willRunOut;
  const doNotHave = ingredient.doNotHave;
  const notEnough = ingredient.notEnough;

  useEffect(() => {
    setIsQFloat(isFloat(ingredient.quantity));
  }, [ingredient.quantity]);

  return (
    <>
      {isInPantry ? (
        <div
          className={
            notEnough
              ? "pantry-ingredients-container not-enough"
              : doNotHave
              ? "pantry-ingredients-container do-not-have"
              : willRunOut
              ? "pantry-ingredients-container will-run-out "
              : "pantry-ingredients-container"
          }
        >
          <div className="pantry-quantity">
            {isQFloat ? ingredient.quantity.toFixed(2) : ingredient.quantity}
          </div>
          <div className="pantry-measurement-name">
            {ingredient.measurement.name}
          </div>
          <div className="pantry-ingredient-name">
            {ingredient.ingredient.name}
          </div>
        </div>
      ) : (
        <>
          <div className="quantity">
            {ingredient ? ingredient.quantity : ""}
          </div>
          <div className="measurement-name">
            {ingredient ? ingredient.measurement.name : ""}
          </div>
          <div className="ingredient-name">
            {ingredient ? ingredient.ingredient.name : ""}
          </div>
        </>
      )}
    </>
  );
};

export default Ingredient;
