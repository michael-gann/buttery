import React from "react";

const Quantity = ({ value, handleUpdateIngredient, idx }) => {
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
          onChange={(e) => handleUpdateIngredient(idx, e, type)}
        ></input>
      </label>
    </>
  );
};

export default Quantity;
