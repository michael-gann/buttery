import React from "react";

import Category from "./Category";

const Categories = ({ categories }) => {
  return (
    <>
      {categories &&
        categories.map((c) => {
          return (
            <div key={c}>
              <Category id={c}></Category>
            </div>
          );
        })}
    </>
  );
};

export default Categories;
