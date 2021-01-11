import React from "react";

import Ingredient from "./Ingredient";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients &&
        ingredients.map((i, idx) => {
          return (
            <div
              style={{ display: "flex" }} // TODO: remove style
              className="home-ingredient-container"
              key={idx}
            >
              <Ingredient ingredient={i}></Ingredient>
            </div>
          );
        })}
      <Ingredient></Ingredient>
    </>
  );
};

export default Ingredients;
