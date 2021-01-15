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

  let icon;

  switch (category.name) {
    case "Dry & Baking":
      icon = icon = <i className="fas fa-cookie"></i>;
      break;
    case "Produce":
      icon = icon = <i className="fas fa-apple-alt"></i>;
      break;
    case "Bread":
      icon = icon = <i className="fas fa-bread-slice"></i>;
      break;
    case "Dairy":
      icon = icon = <i className="fas fa-cheese"></i>;
      break;
    case "Meat & Seafood":
      icon = icon = <i className="fas fa-bacon"></i>;
      break;
    case "Frozen":
      icon = icon = <i className="fas fa-snowflake"></i>;
      break;
    case "Spice":
      icon = icon = <i className="fas fa-mortar-pestle"></i>;
      break;
    case "Beverage":
      icon = icon = <i className="fas fa-wine-glass-alt"></i>;
      break;
    default:
      icon = <div>Ooops...</div>;
  }

  return (
    <>
      {isHomepage ? (
        <>
          <div className="pantry-category-header">{icon}</div>
          <div>
            {count} ingredient{count === 1 ? "" : "s"}
          </div>
        </>
      ) : (
        <>
          <div className="pantry-category-header">{icon}</div>
          <div className="pantry-ingredients-container">
            <PantryIngredients id={id}></PantryIngredients>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
