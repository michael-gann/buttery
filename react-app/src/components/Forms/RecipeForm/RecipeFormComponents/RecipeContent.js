import React from "react";

const RecipeContent = ({ recipeContent, setRecipeContent, displayContent }) => {
  const onChange = (e) => setRecipeContent(e.target.value);

  return (
    <>
      {displayContent ? (
        <label>
          Content
          <input type="text" value={recipeContent} onChange={onChange}></input>
        </label>
      ) : null}
    </>
  );
};

export default RecipeContent;
