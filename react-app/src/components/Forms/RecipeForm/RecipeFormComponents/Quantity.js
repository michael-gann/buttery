import React from "react";

const Quantity = ({ value, handleUpdateIngredient, idx, setQuantityError }) => {
  const type = {
    value: "quantity",
  };

  if (setQuantityError) {
    if (value.qty > 0 && value.qty !== null) {
      setQuantityError("");
    }
  }

  return (
    <>
      <label className="quantity-label">
        Amount
        <input
          className="recipe-form-quantity"
          value={parseFloat(value.qty)}
          type="number"
          step="0.01"
          onChange={(e) => handleUpdateIngredient(idx, e, type)}
        ></input>
      </label>
    </>
  );
};

export default Quantity;
