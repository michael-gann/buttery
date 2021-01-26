import React from "react";

const RecipeName = ({ setRecipe, recipe }) => {
  const onChange = (e) => setRecipe(e.target.value);

  return (
    <>
      <label>
        Recipe Name
        <input
          placeholder="Grandmas Apple Pie"
          type="text"
          value={recipe}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

export default RecipeName;
