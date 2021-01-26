import React from "react";
import { useSelector } from "react-redux";
import { MetroSpinner } from "react-spinners-kit";

import HomeRecipe from "../RecipeComponents/HomeRecipe";

import "./recipes.css";

const Recipes = () => {
  const isLoading = useSelector((state) => state.recipes.loading);
  return (
    <>
      {isLoading ? (
        <div className={isLoading ? "spinner-container" : "hidden"}>
          <MetroSpinner size={100} color="#3ce50f" loading={isLoading} />
        </div>
      ) : (
        <HomeRecipe></HomeRecipe>
      )}
    </>
  );
};

export default Recipes;
