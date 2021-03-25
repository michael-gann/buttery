import React from "react";

import { useHistory } from "react-router-dom";

import Category from "./Category";

const Categories = ({
  categories,
  isHomepage,
  isPantry,
  setIngredientToEditId,
  handleEditPantry,
}) => {
  const history = useHistory();
  return (
    <>
      {isPantry ? (
        <>
          <div className="pantry-page-pantry-container">
            {categories &&
              categories.map((c) => {
                return (
                  <div
                    className="pantry-pantry-category-containers"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo(0, 0);
                      history.push("/add-to-pantry");
                    }}
                    key={c}
                  >
                    <Category
                      setIngredientToEditId={setIngredientToEditId}
                      handleEditPantry={handleEditPantry}
                      isHomepage={isHomepage}
                      id={c}
                    ></Category>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="home-pantry-container">
            {categories &&
              categories.map((c) => {
                return (
                  <div className="pantry-category-containers" key={c}>
                    <Category
                      setIngredientToEditId={setIngredientToEditId}
                      isHomepage={isHomepage}
                      id={c}
                    ></Category>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
