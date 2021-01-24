import React from "react";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

const RecipeStep = ({ handleAdd, handleChange, handleRemove, stepFields }) => {
  //   const onClick = (e) => {};
  return (
    <>
      <div className="add-step-button">
        <button type="button" onClick={() => handleAdd()}>
          <div className="plus-button">
            <ImPlus />
          </div>
          Add New Step
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
