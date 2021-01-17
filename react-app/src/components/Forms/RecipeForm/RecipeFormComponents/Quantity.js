import React from "react";

const Quantity = ({ value, handleUpdateIngredient, idx }) => {
  const type = {
    value: "quantity",
  };

  return (
    <>
      <label className="quantity-label">
        Amount
        <input
          className="recipe-form-quantity"
          value={value.qty}
          type="number"
          onChange={(e) => handleUpdateIngredient(idx, e, type)}
        ></input>
      </label>
    </>
  );
};

export default Quantity;
