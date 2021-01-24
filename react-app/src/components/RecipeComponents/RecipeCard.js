import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import RecipeForm from "../Forms/RecipeForm/RecipeForm";
import RecipeTitle from "./RecipeTitle";
// import Ingredients from "./Ingredients";
// import Steps from "./Steps";
import { MetroSpinner } from "react-spinners-kit";
// import { IconContext } from "react-icons";
// import { FaCircle } from "react-icons/fa";
// import { BsCircleFill } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

import * as cookingListActions from "../../store/cookingLists";

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

const RecipeCard = ({ id, isEditing, handleEditRecipe, isHomepage }) => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const shop = localStorage.getItem(`recipe-${id}`);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.recipes.loading);
  const user = useSelector((state) => state.users.sessionUser);
  const [toShop, setToShop] = useState(shop ? shop : false);

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  const recipeIngredients = Object.values(recipe)[0].ingredients;

  const pantryIngredients = useSelector((state) => state.pantries.pantries);

  const result = _.differenceWith(
    recipeIngredients,
    pantryIngredients,
    (x, y) =>
      x.ingredient_id === y.ingredient_id && x.quantity - y.quantity <= 0
  );

  const isClose = result.length > 0 && result.length <= 3;
  const canMake = result.length === 0;

  const addToShop = () => {
    const form = new FormData();

    form.set("recipe_id", id);
    form.set("user_id", user.id);

    dispatch(cookingListActions.addToShoppingList(form));
    setToShop(true);
    localStorage.setItem(`recipe-${id}`, true);
  };

  const removeFromShop = () => {
    dispatch(cookingListActions.removeRecipe(id));
    setToShop(false);
    localStorage.removeItem(`recipe-${id}`);
  };

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
            <>
              <div className="home-recipe-title">
                <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
                <RecipeTitle title={recipe[`${id}`].name} id={id}></RecipeTitle>
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
            </>
          ) : (
            <>
              <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
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
              <div className="home-recipe-content">
                {recipe[`${id}`].content}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RecipeCard;
