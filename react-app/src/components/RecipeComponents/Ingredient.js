import React from "react";

const Ingredient = ({ ingredient, isInPantry }) => {
  const willRunOut = ingredient.willRunOut;
  const doNotHave = ingredient.doNotHave;

  return (
    <>
      {isInPantry ? (
        <div
          className={
            willRunOut
              ? "will-run-out pantry-ingredients-container"
              : doNotHave
              ? "pantry-ingredients-container do-not-have"
              : "pantry-ingredients-container"
          }
        >
          <div className="pantry-quantity">{ingredient.quantity}</div>
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
