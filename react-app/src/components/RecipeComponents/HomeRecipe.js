import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import _ from "lodash";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import RecipeCard from "./RecipeCard";

const snackbarSuccessStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#23bf93",
    color: "white",
  },
}));

const HomeRecipe = ({ isHomepage, setIsHomepage }) => {
  const history = useHistory();
  const [showSuccess, setShowSuccess] = useState(false);
  const recipeObjects = useSelector((state) => state.recipes.recipes);

  const recipeIdsCopy = _.cloneDeep(recipeObjects);

  const recipeIds = recipeIdsCopy
    .sort((a, b) => {
      const firstKey = Object.keys(a)[0];
      const secondKey = Object.keys(b)[0];
      const result =
        parseInt(a[firstKey].recipeDistance) -
        parseInt(b[secondKey].recipeDistance);
      console.log(result);
      return result;
    })
    .map((r) => Object.keys(r)[0]);

  const handleClick = (e) => {
    e.preventDefault();
    return history.push(`/new-recipe`);
  };

  const handleShowSuccess = (e) => {
    // e.preventDefault();
    setShowSuccess(true);
  };

  const handleShowSuccessClose = (e) => {
    setShowSuccess(false);
  };

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
        autoHideDuration={5000}
        onClose={handleShowSuccessClose}
      >
        <MuiAlert
          classes={{ root: snackbarSuccessStyles.root }}
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
