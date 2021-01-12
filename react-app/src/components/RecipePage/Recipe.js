import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import RecipeCard from "../RecipeComponents/RecipeCard";
import Ingredients from "../RecipeComponents/Ingredients";
import Steps from "../RecipeComponents/Steps";
import { MetroSpinner } from "react-spinners-kit";

import "./recipe.css";

const Recipe = () => {
  // const history = useHistory();

  const [isEditing, setIsEditing] = useState(false);
  // const [deletion, setDeletion] = useState(false);
  const { id } = useParams();

  const isLoading = useSelector((state) => state.recipes.loading);
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  const handleEditRecipe = () => {
    setIsEditing(!isEditing);
  };

  // const handleDeleteRecipe = async () => {
  //   const res = await fetch(`/api/recipes/${id}`, {
  //     method: "DELETE",
  //   });
  // might need to render recipe ? recipe : null
  // TODO: add action here for deletion status?

  //   const data = await res.json();

  //   if (data.success) {
  //     setDeletion(!deletion);
  //     history.push(`/recipes`);
  //   }
  // };

  return (
    <div className="recipe-page-container">
      <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
      <button onClick={handleEditRecipe}>Edit Recipe</button>
      {/* <button onClick={handleDeleteRecipe}>Delete Recipe</button> */}
      <>
        {isEditing ? (
          <RecipeCard
            id={id}
            isEditing={isEditing}
            handleEditRecipe={handleEditRecipe}
          ></RecipeCard>
        ) : (
          <>
            {recipe && (
              <>
                <RecipeCard
                  id={id}
                  isEditing={isEditing}
                  handleEditRecipe={handleEditRecipe}
                ></RecipeCard>
                <div className="home-ingredients-container">
                  <Ingredients ingredients={recipe[`${id}`].ingredients} />
                </div>
                <div className="home-steps-container">
                  <Steps steps={recipe[`${id}`].steps} />
                </div>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Recipe;
