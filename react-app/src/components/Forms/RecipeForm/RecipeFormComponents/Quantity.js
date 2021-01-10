import React from "react";

const Quantity = ({ value, handleRecipeIngredientChange, idx }) => {
  const type = {
    value: "quantity",
  };

  return (
    <>
      <label>
        Qty.
        <input
          value={value.qty}
          type="number"
          onChange={(e) => handleRecipeIngredientChange(idx, e, type)}
        ></input>
      </label>
    </>
  );
};

export default Quantity;
