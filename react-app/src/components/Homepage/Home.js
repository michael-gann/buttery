import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import HomeRecipe from "../RecipeComponents/HomeRecipe";
import HomePantry from "../PantryComponents/HomePantry";
import ShoppingList from "../ShoppingListComponents/ShoppingList";
import { FiPlusSquare } from "react-icons/fi";

import "./home.css";

import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeft = styled.div`
  animation: 0.5s ${slideInLeftAnimation};
`;

const Home = () => {
  const history = useHistory();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(true);
  }, []);

  const handleClick = () => {
    return history.push(`/new-recipe`);
  };

  return (
    <div className="home-main-container">
      <div className="recipes">
        <SlideInLeft>
          <h2 className="recipes-header">Recipes</h2>
          {
            <button className="add-recipe-button" onClick={handleClick}>
              <FiPlusSquare />
            </button>
          }

          <HomeRecipe
            handleClick={handleClick}
            isHomepage={isHomepage}
            setIsHomepage={setIsHomepage}
          ></HomeRecipe>
        </SlideInLeft>
      </div>
      <div className="shopping-list">
        <h2 className="shopping-list-header">Shopping List</h2>
        <ShoppingList isHomepage={isHomepage}></ShoppingList>
      </div>
      <div className="pantry">
        <h2 className="pantry-header">Pantry</h2>
        <HomePantry isHomepage={isHomepage}></HomePantry>
      </div>
    </div>
  );
};

export default Home;
