import React from "react";
import { useSelector } from "react-redux";

import PantryIngredient from "./PantryIngredient";

import { MetroSpinner } from "react-spinners-kit";

const PantryIngredients = ({ id }) => {
  const ingredients = useSelector((state) => state.pantries.pantries);
  const isLoading = useSelector((state) => state.pantries.loading);

  const pantryIngredients = ingredients.filter(
    (i) => i.ingredient.type_id === id
  );

  return (
    <>
      {pantryIngredients &&
        pantryIngredients.map((i, idx) => {
          return (
            <>
              <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
              <div key={id} className="pantry-ingredient-container">
                <PantryIngredient
                  ingredient={i}
                  isLoading={isLoading}
                ></PantryIngredient>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PantryIngredients;
