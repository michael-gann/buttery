import React from "react";
import { useSelector } from "react-redux";

import PantryIngredients from "./PantryIngredients";

const Category = ({ id }) => {
  const categories = useSelector((state) => state.categories.categories);

  const category = categories.find((c) => c.id === id);
  return (
    <>
      <div>{category.name}</div>
      <PantryIngredients id={id}></PantryIngredients>
    </>
  );
};

export default Category;
