import React from "react";
import { NavLink } from "react-router-dom";

const RecipeTitle = ({ title, id }) => {
  return (
    <>
      <NavLink to={`/recipes/${id}`} exact={true} activeClassName="active">
        {title}
      </NavLink>
    </>
  );
};

export default RecipeTitle;
