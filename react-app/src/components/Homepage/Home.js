import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MetroSpinner } from "react-spinners-kit";
import Badge from "@material-ui/core/Badge";

import HomeRecipe from "../RecipeComponents/HomeRecipe";
import HomePantry from "../PantryComponents/HomePantry";
import ShoppingList from "../ShoppingListComponents/ShoppingList";

import * as pantryActions from "../../store/pantries";

import "./home.css";

import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeft = styled.div`
  animation: 0.5s ${slideInLeftAnimation};
`;

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: "#EB7910",
    right: -5,
    top: 5,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isHomepage, setIsHomepage] = useState(false);
  const isLoading = useSelector((state) => state.recipes.loading);
  const numberOfRecipesToShop = useSelector(
    (state) => state.cookingLists.recipesToShop.length
  );

  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    setIsHomepage(true);
    dispatch(pantryActions.getUserPantryItems(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  const handleClick = () => {
    return history.push(`/new-recipe`);
  };

  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <div className={isLoading ? "spinner-container" : "hidden"}>
          <MetroSpinner size={100} color="#23bf93;" loading={isLoading} />
        </div>
      ) : (
        <div className="home-main-container">
          <div className="recipes">
            <SlideInLeft>
              <div className="recipes-header-and-button-container">
                <h2 className="recipes-header">Recipe Book</h2>
              </div>
              <HomeRecipe
                handleClick={handleClick}
                isHomepage={isHomepage}
                setIsHomepage={setIsHomepage}
              ></HomeRecipe>
            </SlideInLeft>
          </div>
          <div className="shopping-list">
            <div className="shopping-list-container-background">
              <div className="shopping-list-header-container">
                <Badge
                  badgeContent={numberOfRecipesToShop}
                  classes={{ badge: classes.badge }}
                >
                  <h2 className="shopping-list-header">Shopping List</h2>
                </Badge>
              </div>
              <ShoppingList isHomepage={isHomepage}></ShoppingList>
            </div>
          </div>
          <div className="pantry">
            <h2 className="pantry-header">Pantry Overview</h2>
            <HomePantry isHomepage={isHomepage}></HomePantry>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
