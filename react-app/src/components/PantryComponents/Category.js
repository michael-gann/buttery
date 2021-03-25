import React from "react";
import { useSelector } from "react-redux";

import PantryIngredients from "./PantryIngredients";

const Category = ({
  id,
  isHomepage,
  setIngredientToEditId,
  handleEditPantry,
}) => {
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
      icon = icon = <i alt="cookie icon" className="fas fa-cookie"></i>;
      break;
    case "Produce":
      icon = icon = <i alt="apple icon" className="fas fa-apple-alt"></i>;
      break;
    case "Bread":
      icon = icon = <i alt="bread icon" className="fas fa-bread-slice"></i>;
      break;
    case "Dairy":
      icon = icon = <i alt="cheese icon" className="fas fa-cheese"></i>;
      break;
    case "Meat & Seafood":
      icon = icon = <i alt="bacon icon" className="fas fa-bacon"></i>;
      break;
    case "Frozen":
      icon = icon = <i alt="snowflake icon" className="fas fa-snowflake"></i>;
      break;
    case "Spice":
      icon = icon = (
        <i alt="mortal and pestle icon" className="fas fa-mortar-pestle"></i>
      );
      break;
    case "Beverage":
      icon = icon = (
        <i
          alt="wine glass with liquid inside icon"
          className="fas fa-wine-glass-alt"
        ></i>
      );
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
            <PantryIngredients
              setIngredientToEditId={setIngredientToEditId}
              handleEditPantry={handleEditPantry}
              id={id}
            ></PantryIngredients>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
