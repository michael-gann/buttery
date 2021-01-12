import React from "react";
import { useSelector } from "react-redux";

import RecipeForm from "../Forms/RecipeForm/RecipeForm";
import RecipeTitle from "./RecipeTitle";
// import Ingredients from "./Ingredients";
// import Steps from "./Steps";
import { MetroSpinner } from "react-spinners-kit";

const RecipeCard = ({ id, isEditing, handleEditRecipe, isHomepage }) => {
  const isLoading = useSelector((state) => state.recipes.loading);

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  return (
    <>
      {isEditing ? (
        <RecipeForm
          recipeToEdit={id}
          isEditing={isEditing}
          handleEditRecipe={handleEditRecipe}
        ></RecipeForm>
      ) : (
        <>
          {isHomepage ? (
            <div className="home-recipe-title">
              <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
              <RecipeTitle title={recipe[`${id}`].name} id={id} />
            </div>
          ) : (
            <>
              <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
              <div className="home-recipe-title">
                <RecipeTitle title={recipe[`${id}`].name} id={id} />
              </div>
              <div className="home-recipe-content">
                {recipe[`${id}`].content}
              </div>
              {/* <div className="home-ingredients-container">
                <Ingredients ingredients={recipe[`${id}`].ingredients} />
              </div>
              <div className="home-steps-container">
                <Steps steps={recipe[`${id}`].steps} />
              </div> */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default RecipeCard;
