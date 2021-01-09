import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RecipeCard from "./RecipeCard";

const HomeRecipe = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const history = useHistory();

  const handleClick = () => {
    return history.push(`/new-recipe`);
  };

  return (
    <>
      <button onClick={handleClick}>Add new recipe</button>
      <div className="home-recipecard-container">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeRecipe;
