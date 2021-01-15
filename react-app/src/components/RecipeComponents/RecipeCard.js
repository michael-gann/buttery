import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import RecipeForm from "../Forms/RecipeForm/RecipeForm";
import RecipeTitle from "./RecipeTitle";
// import Ingredients from "./Ingredients";
// import Steps from "./Steps";
import { MetroSpinner } from "react-spinners-kit";
import { IconContext } from "react-icons";
import { FaCircle } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

import * as cookingListActions from "../../store/cookingLists";

const RecipeCard = ({ id, isEditing, handleEditRecipe, isHomepage }) => {
  // get state of toShop from localStorage
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.recipes.loading);
  const user = useSelector((state) => state.users.sessionUser);
  // use local storage state or default
  const [toShop, setToShop] = useState(false);

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  const addToShop = () => {
    const form = new FormData();

    form.set("recipe_id", id);
    form.set("user_id", user.id);

    dispatch(cookingListActions.addToShoppingList(form));
    setToShop(true);
    // set toShop in localStorage
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
                <RecipeTitle title={recipe[`${id}`].name} id={id} />
              </div>
              {toShop ? (
                <button className="shop-button shop-button-remove">
                  <ImMinus />
                </button>
              ) : (
                <button
                  className="shop-button shop-button-add"
                  onClick={addToShop}
                >
                  <ImPlus />
                </button>
              )}

              <IconContext.Provider
                value={{ className: `circle-${toShop ? "yes" : ""}` }}
              >
                <div>
                  <BsCircleFill />
                </div>
              </IconContext.Provider>

              {/* display how close to being able to make here */}
            </>
          ) : (
            <>
              <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
              <div className="home-recipe-title">
                <RecipeTitle title={recipe[`${id}`].name} id={id} />
              </div>
              <div className="home-recipe-content">
                {recipe[`${id}`].content}
              </div>
              {/* <div className="home-ingredients-container">
                <Ingredients ingredients={recipe[`${id}`].ingredients} />
              </div>
              <div className="home-steps-container">
                <Steps steps={recipe[`${id}`].steps} />
              </div> */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default RecipeCard;
