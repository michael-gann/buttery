import React from "react";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

const RecipeStep = ({ handleAdd, handleChange, handleRemove, stepFields }) => {
  //   const onClick = (e) => {};
  return (
    <>
      <div className="add-step-button">
        Steps
        <button type="button" onClick={() => handleAdd()}>
          <ImPlus />
        </button>
      </div>
      {stepFields.map((field, idx) => {
        return (
          <div className="recipe-step" key={`${field}-${idx}`}>
            {/* {`Step ${idx + 1}`} */}
            <textarea
              type="text"
              placeholder="new step"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <div className="step-remove-button">
              <button type="button" onClick={() => handleRemove(idx)}>
                <ImMinus />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecipeStep;
