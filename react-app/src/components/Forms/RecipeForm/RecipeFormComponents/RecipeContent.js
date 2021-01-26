import React from "react";

const RecipeContent = ({ recipeContent, setRecipeContent }) => {
  const onChange = (e) => setRecipeContent(e.target.value);

  return (
    <>
      <label>
        Recipe Notes
        <input
          placeholder="Some notes about the recipe..."
          type="text"
          value={recipeContent}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

export default RecipeContent;
