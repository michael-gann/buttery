import React from "react";

import RecipeTitle from "./RecipeTitle";
import Ingredients from "./Ingredients";
import Steps from "./Steps";

const RecipeCard = ({ recipe }) => {
  //   console.log(recipe);
  return (
    <>
      <div className="home-recipe-title">
        <RecipeTitle title={recipe.name} />
      </div>
      <div className="home-ingredients-container">
        <Ingredients ingredients={recipe.ingredients} />
      </div>
      <div className="home-steps-container">
        <Steps steps={recipe.steps} />
      </div>
    </>
  );
};

export default RecipeCard;
