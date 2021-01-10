import React from "react";

import HomeRecipe from "../RecipeComponents/HomeRecipe";
import HomePantry from "../PantryComponents/HomePantry";

const Home = () => {
  return (
    <div>
      <div>HOME</div>
      <HomeRecipe></HomeRecipe>
      <HomePantry></HomePantry>
    </div>
  );
};

export default Home;
