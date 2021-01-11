import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import RecipeCard from "./RecipeCard";

const HomeRecipe = () => {
  const history = useHistory();

  const recipeIds = useSelector(
    (state) => state.recipes.recipes.map((r) => Object.keys(r)[0]),
    shallowEqual
  );

  const handleClick = () => {
    return history.push(`/new-recipe`);
  };

  return (
    <>
      <button onClick={handleClick}>Add new recipe</button>
      <div className="home-recipecard-container">
        {recipeIds &&
          recipeIds.map((id) => {
            return (
              <div key={id}>
                <RecipeCard id={id} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeRecipe;
