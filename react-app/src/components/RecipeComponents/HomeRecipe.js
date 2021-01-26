import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import _ from "lodash";

import RecipeCard from "./RecipeCard";

const HomeRecipe = ({ isHomepage, setIsHomepage }) => {
  const history = useHistory();

  const recipeObjects = useSelector((state) => state.recipes.recipes);

  const recipeIdsCopy = _.cloneDeep(recipeObjects);

  const recipeIds = recipeIdsCopy
    .sort((a, b) => {
      const firstKey = Object.keys(a)[0];
      const secondKey = Object.keys(b)[0];
      const result =
        parseInt(a[firstKey].recipeDistance) -
        parseInt(b[secondKey].recipeDistance);
      console.log(result);
      return result;
    })
    .map((r) => Object.keys(r)[0]);

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
