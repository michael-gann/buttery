import React from "react";

const RecipeName = ({ setRecipe, recipe }) => {
  const onChange = (e) => setRecipe(e.target.value);

  return (
    <>
      <label>
        Recipe Name
        <input type="text" value={recipe} onChange={onChange}></input>
      </label>
    </>
  );
};

export default RecipeName;
