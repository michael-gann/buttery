import React, { useState, useEffect } from "react";

import HomeRecipe from "../RecipeComponents/HomeRecipe";
import HomePantry from "../PantryComponents/HomePantry";
import ShoppingList from "../ShoppingListComponents/ShoppingList";

import "./home.css";

const Home = () => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(true);
  }, []);

  return (
    <div className="home-main-container">
      <div className="recipes">
        <h2 className="recipes-header">Recipes</h2>
        <HomeRecipe
          isHomepage={isHomepage}
          setIsHomepage={setIsHomepage}
        ></HomeRecipe>
      </div>
      <div className="pantry">
        <h2 className="pantry-header">Pantry</h2>
        <HomePantry isHomepage={isHomepage}></HomePantry>
      </div>
      <div className="shopping-list">
        <h2 className="shopping-list-header">Shopping List</h2>
        <ShoppingList isHomepage={isHomepage}></ShoppingList>
      </div>
    </div>
  );
};

export default Home;
