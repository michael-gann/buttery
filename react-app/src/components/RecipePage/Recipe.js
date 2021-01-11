import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

import RecipeCard from "../RecipeComponents/RecipeCard";

const Recipe = ({ recipe }) => {
  // const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  // const [deletion, setDeletion] = useState(false);
  const { id } = useParams();

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
      <button onClick={handleEditRecipe}>Edit Recipe</button>
      {/* <button onClick={handleDeleteRecipe}>Delete Recipe</button> */}
      <RecipeCard
        id={id}
        isEditing={isEditing}
        handleEditRecipe={handleEditRecipe}
      ></RecipeCard>
    </div>
  );
};

export default Recipe;
