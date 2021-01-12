import React from "react";
import { useSelector } from "react-redux";

import PantryIngredients from "./PantryIngredients";

const Category = ({ id, isHomepage }) => {
  const categories = useSelector((state) => state.categories.categories);
  // get number of each category of ingredient and display here if homepage
  const ingredients = useSelector((state) => state.pantries.pantries);
  const pantryIngredients = ingredients.filter(
    (i) => i.ingredient.type_id === id
  );

  let count = pantryIngredients.length;

  const category = categories.find((c) => c.id === id);
  return (
    <>
      {isHomepage ? (
        <>
          <div className="pantry-category-header">{category.name}</div>
          <div>{count} items</div>
        </>
      ) : (
        <>
          <div className="pantry-category-header">{category.name}</div>
          <div className="pantry-ingredients-container">
            <PantryIngredients id={id}></PantryIngredients>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
