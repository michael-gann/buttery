import React from "react";

import Category from "./Category";

const Categories = ({ categories, isHomepage, isPantry }) => {
  return (
    <>
      {isPantry ? (
        <>
          <div className="pantry-page-pantry-container">
            {categories &&
              categories.map((c) => {
                return (
                  <div className="pantry-pantry-category-containers" key={c}>
                    <Category isHomepage={isHomepage} id={c}></Category>
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
                    <Category isHomepage={isHomepage} id={c}></Category>
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
