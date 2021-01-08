import React from "react";

const RecipeStep = ({
  handleAdd,
  handleChange,
  handleRemove,
  stepFields,
  recipeStep,
  setRecipeStep,
}) => {
  //   const onClick = (e) => {};
  return (
    <>
      <button type="button" onClick={() => handleAdd()}>
        add step
      </button>
      {stepFields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            {`Step ${idx + 1}`}
            <input
              type="text"
              placeholder="new step"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              remove step
            </button>
          </div>
        );
      })}
    </>
  );
};

export default RecipeStep;
