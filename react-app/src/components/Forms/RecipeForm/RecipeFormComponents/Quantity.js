import React from "react";

const Quantity = ({ value, handleUpdateIngredient, idx, setQuantityError }) => {
  const type = {
    value: "quantity",
  };

  // const [quantity, setQuantity] = useState("")
  if (setQuantityError) {
    if (parseFloat(value.qty) <= 0 && value.qty !== "") {
      setQuantityError("Quantity must be greater than 0.");
    }

    if (parseFloat(value.qty) > 0 && value.qty !== "") {
      setQuantityError("");
    }
  }

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
