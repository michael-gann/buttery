import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImPlus } from "react-icons/im";

import RecipeCard from "./RecipeCard";

const HomeRecipe = ({ isHomepage, setIsHomepage }) => {
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
      <div
        className={
          isHomepage
            ? `home-recipecard-container`
            : `recipe-page-recipecard-container`
        }
      >
        {recipeIds &&
          recipeIds.map((id) => {
            return (
              <div className="recipecard-main-containers" key={id}>
                <RecipeCard
                  // addToShop={addToShop}
                  isHomepage={isHomepage}
                  setIsHomepage={setIsHomepage}
                  id={id}
                />
              </div>
            );
          })}
        {!isHomepage ? (
          <div className="add-recipe-container">
            <button className="add-recipe-button" onClick={handleClick}>
              <div className="plus-button">
                <ImPlus />
              </div>
              Add New Recipe
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HomeRecipe;
