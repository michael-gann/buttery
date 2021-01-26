import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

// import { MetroSpinner } from "react-spinners-kit";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import RecipeForm from "../Forms/RecipeForm/RecipeForm";
import RecipeTitle from "./RecipeTitle";

import * as cookingListActions from "../../store/cookingLists";
import * as recipeActions from "../../store/recipes";

export const pretendPantry = (
  recipeIngredients,
  shoppingIngredients,
  pantry
) => {
  // take pantry and add everything from shopping list and subtract recipe ingredients

  // create copy of pantry to prevent mutating original pantry
  const pantryCopy = _.cloneDeep(pantry);
  const shoppingIngredientsCopy = _.cloneDeep(shoppingIngredients);

  // generate pantry map
  const pantryIngredientsMap = {};

  for (const pi of pantryCopy) {
    if (!pantryIngredientsMap[pi.ingredient_id]) {
      pantryIngredientsMap[pi.ingredient_id] = pi;
    }
  }

  // take shopping list ingredients and add to pantry
  for (const si of shoppingIngredientsCopy) {
    if (pantryIngredientsMap[si.ingredient_id] && si.quantity > 0) {
      pantryIngredientsMap[si.ingredient_id].quantity += si.quantity;
    } else {
      pantryIngredientsMap[si.ingredient_id] = si;
    }
  }
  // subtract recipe ingredients from pantry as if we used them
  for (const r of recipeIngredients) {
    if (
      pantryIngredientsMap[r.ingredient_id] !== undefined &&
      pantryIngredientsMap[r.ingredient_id]
    ) {
      pantryIngredientsMap[r.ingredient_id].quantity -= r.quantity;
    }
  }

  return Object.values(pantryIngredientsMap);
};

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: "#23BF93",
    // fontSize: 10,
    right: -10,
    top: -5,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  badge: {
    backgroundColor: "#E6C73B",
    // fontSize: 10,
    right: -10,
    top: -5,
  },
}));

const useStyles3 = makeStyles((theme) => ({
  badge: {
    backgroundColor: "#F39C9F",
    // fontSize: 10,
    right: -10,
    top: -5,
  },
}));

const RecipeCard = ({
  id,
  isEditing,
  handleEditRecipe,
  isHomepage,
  isRecipePage,
  showSuccess,
  setShowSuccess,
  handleShowSuccess,
}) => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  const shoppingList = useSelector((state) =>
    Object.values(state.cookingLists.shoppingList)
  );

  const recipeShoppingList = useSelector(
    (state) => state.cookingLists.recipesToShop
  );

  const alreadyShopping = recipeShoppingList.find(
    (r) => parseInt(r.recipe_id) === parseInt(id)
  );

  console.log("already shopping", alreadyShopping);

  const recipeIngredients = Object.values(recipe)[0]
    ? Object.values(recipe)[0].ingredients
    : [];
  const pantryIngredients = useSelector((state) => state.pantries.pantries);
  const dispatch = useDispatch();

  // const isLoading = useSelector((state) => state.recipes.loading);
  const user = useSelector((state) => state.users.sessionUser);
  const [toShop, setToShop] = useState(alreadyShopping ? true : false);
  const [fakePantry, setFakePantry] = useState(
    pretendPantry(recipeIngredients, shoppingList, pantryIngredients)
  );
  const [isHovering, setIsHovering] = useState(false);

  const result = _.differenceWith(
    recipeIngredients,
    fakePantry,
    (x, y) => x.ingredient_id === y.ingredient_id && x.quantity - y.quantity < 0
  );

  useEffect(() => {
    setFakePantry(
      pretendPantry(recipeIngredients, shoppingList, pantryIngredients)
    );
  }, [recipeIngredients, pantryIngredients, shoppingList.length]);

  useEffect(() => {
    dispatch(recipeActions.setRecipeDistance(result.length, id));
    setToShop(alreadyShopping ? true : false);
  }, [dispatch, result.length, id, alreadyShopping]);

  const isClose = result.length > 0 && result.length <= 3;
  const canMake = result.length === 0;

  const addToShop = (e) => {
    e.preventDefault();
    handleShowSuccess();
    const form = new FormData();

    form.set("recipe_id", id);
    form.set("user_id", user.id);

    dispatch(cookingListActions.addToShoppingList(form)).then(() =>
      dispatch(cookingListActions.getShoppingList(user.id))
    );
    setToShop(true);
  };

  const removeFromShop = (e) => {
    e.preventDefault();
    dispatch(cookingListActions.removeRecipe(id)).then(() =>
      dispatch(cookingListActions.getShoppingList(user.id))
    );
    setToShop(false);
  };

  const handleHover = (e) => {
    setIsHovering(!isHovering);
  };

  // const handleShowSuccess = (e) => {
  //   e.preventDefault();
  //   setShowSuccess(true);
  // };

  // const handleShowSuccessClose = (e) => {
  //   e.preventDefault();
  //   setShowSuccess(false);
  // };

  return (
    <>
      {isEditing ? (
        <RecipeForm
          recipeToEdit={id}
          isEditing={isEditing}
          handleEditRecipe={handleEditRecipe}
        ></RecipeForm>
      ) : (
        <>
          {isHomepage ? (
            <div className="recipecard-main-containers">
              <div className="home-recipe-title">
                <RecipeTitle
                  title={recipe[`${id}`] ? recipe[`${id}`].name : "loading..."}
                  id={id}
                ></RecipeTitle>
              </div>
              {toShop ? (
                <button
                  onClick={removeFromShop}
                  className="shop-button shop-button-remove"
                >
                  <ImMinus />
                </button>
              ) : (
                <button
                  className="shop-button shop-button-add"
                  onClick={addToShop}
                >
                  <Badge
                    showZero={true}
                    badgeContent={result.length}
                    anchororign={{ vertical: "top", horizontal: "right" }}
                    classes={
                      isClose
                        ? { badge: classes2.badge }
                        : canMake
                        ? { badge: classes.badge }
                        : { badge: classes3.badge }
                    }
                  >
                    <ImPlus />
                  </Badge>
                </button>
              )}
            </div>
          ) : (
            <div
              className="recipecard-main-containers"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <NavLink to={`/recipes/${id}`}>
                <Badge
                  showZero={true}
                  badgeContent={result.length}
                  anchororign={{ vertical: "top", horizontal: "right" }}
                  classes={
                    isClose
                      ? { badge: classes2.badge }
                      : canMake
                      ? { badge: classes.badge }
                      : { badge: classes3.badge }
                  }
                >
                  <div className="home-recipe-title">
                    <RecipeTitle title={recipe[`${id}`].name} id={id} />
                  </div>
                </Badge>

                {isRecipePage ? (
                  <div className="home-recipe-content">
                    {recipe[`${id}`].content}
                  </div>
                ) : (
                  <div className="home-recipe-content">
                    {recipe[`${id}`].content.length > 256
                      ? recipe[`${id}`].content.slice(0, 256) + "..."
                      : recipe[`${id}`].content}
                  </div>
                )}
                <div className={isHovering ? "hovering" : "buttons-container"}>
                  <div
                    className={
                      toShop ? "remove-from-shop-button" : "want-to-make-button"
                    }
                  >
                    {toShop ? (
                      <button onClick={removeFromShop}>
                        <i className="fas fa-minus"></i> Remove
                      </button>
                    ) : (
                      <>
                        <button onClick={addToShop}>
                          <i className="fas fa-plus"></i> Shop
                        </button>
                      </>
                    )}
                  </div>
                  <div className="made-button">
                    <button>Cooked</button>
                  </div>
                </div>
              </NavLink>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RecipeCard;
