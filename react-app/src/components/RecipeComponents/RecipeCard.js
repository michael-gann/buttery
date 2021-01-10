import React from "react";
import { useSelector } from "react-redux";

import RecipeForm from "../Forms/RecipeForm/RecipeForm";
import RecipeTitle from "./RecipeTitle";
import Ingredients from "./Ingredients";
import Steps from "./Steps";

const RecipeCard = ({ id, isEditing, handleEditRecipe }) => {
  // const [currentRecipe, setCurrentRecipe] = useState({});

  const recipe = useSelector((state) =>
    state.recipes.recipes.find((recipe) => Object.keys(recipe)[0] === id)
  );

  // console.log("Current Recipe", currentRecipe);

  // useEffect(() => {
  //   setCurrentRecipe(recipe);
  // }, [recipe]);

  console.log("RECIPE CARD", recipe);

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
          {recipe && (
            <div>
              <div className="home-recipe-title">
                <RecipeTitle title={recipe[`${id}`].name} id={id} />
              </div>
              <div className="home-ingredients-container">
                <Ingredients ingredients={recipe[`${id}`].ingredients} />
              </div>
              <div className="home-steps-container">
                <Steps steps={recipe[`${id}`].steps} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RecipeCard;
