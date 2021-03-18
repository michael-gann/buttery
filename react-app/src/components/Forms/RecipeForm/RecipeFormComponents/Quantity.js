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
          value={parseInt(value.qty)}
          type="number"
          onChange={(e) => handleUpdateIngredient(idx, e, type)}
        ></input>
      </label>
    </>
  );
};

export default Quantity;
