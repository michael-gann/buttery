import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

import PantryIngredient from "./PantryIngredient";

import { MetroSpinner } from "react-spinners-kit";

const PantryIngredients = ({ id, setIngredientToEditId, handleEditPantry }) => {
  const ingredients = useSelector((state) => state.pantries.pantries);
  const isLoading = useSelector((state) => state.pantries.loading);
  // const [isHovering, setIsHovering] = useState(false);

  const pantryIngredients = ingredients.filter(
    (i) => i.ingredient.type_id === id
  );

  // const handleHover = (e) => {
  //   setIsHovering(true);
  // };

  // const handleHoverOff = (e) => {
  //   setIsHovering(false);
  // };

  return (
    <>
      {pantryIngredients &&
        pantryIngredients.map((i, idx) => {
          return (
            <>
              <MetroSpinner size={40} color="#23bf93" loading={isLoading} />
              <div key={idx} className="pantry-ingredient-container">
                <PantryIngredient
                  ingredient={i}
                  isLoading={isLoading}
                  setIngredientToEditId={setIngredientToEditId}
                  handleEditPantry={handleEditPantry}
                ></PantryIngredient>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PantryIngredients;
