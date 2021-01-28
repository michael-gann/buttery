import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import _ from "lodash";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import RecipeCard from "./RecipeCard";

const HomeRecipe = ({ isHomepage, setIsHomepage }) => {
  const history = useHistory();
  const [showSuccess, setShowSuccess] = useState(false);
  // const [toShop, setToShop] = useState(alreadyShopping ? true : false);

  const recipeObjects = useSelector((state) => state.recipes.recipes);

  const recipeIdsCopy = _.cloneDeep(recipeObjects);

  const recipeIds = recipeIdsCopy
    .sort((a, b) => {
      const firstKey = Object.keys(a)[0];
      const secondKey = Object.keys(b)[0];
      const result =
        parseInt(a[firstKey].recipeDistance) -
        parseInt(b[secondKey].recipeDistance);
      return result;
    })
    .map((r) => Object.keys(r)[0]);

  const handleClick = (e) => {
    e.preventDefault();
    return history.push(`/new-recipe`);
  };

  const handleShowSuccess = (e) => {
    setShowSuccess(true);
  };

  const handleShowSuccessClose = (e) => {
    setShowSuccess(false);
  };

  // const removeFromShop = (e, id, user) => {
  //   e.preventDefault();
  //   dispatch(cookingListActions.removeRecipe(id)).then(() =>
  //     dispatch(cookingListActions.getShoppingList(user.id))
  //   );
  //   setToShop(false);
  // };

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
              <div className="recipe-card" key={id}>
                <RecipeCard
                  // setToShop={setToShop}
                  // removeFromShop={removeFromShop}
                  handleShowSuccess={handleShowSuccess}
                  handleShowSuccessClose={handleShowSuccessClose}
                  showSuccess={showSuccess}
                  setShowSuccess={setShowSuccess}
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
              <i className="fas fa-plus"></i> Add New Recipe
            </button>
          </div>
        ) : null}
      </div>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={handleShowSuccessClose}
      >
        <MuiAlert
          onClose={handleShowSuccessClose}
          severity="success"
          variant="filled"
          color="success"
        >
          Recipe Added!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default HomeRecipe;
