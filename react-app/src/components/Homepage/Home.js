import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeRecipe from "../RecipeComponents/HomeRecipe";
import HomePantry from "../PantryComponents/HomePantry";

import * as recipeActions from "../../store/recipes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeActions.userRecipes());
  }, [dispatch]);

  return (
    <div>
      <div>HOME</div>
      <HomeRecipe></HomeRecipe>
      <HomePantry></HomePantry>
    </div>
  );
};

export default Home;
