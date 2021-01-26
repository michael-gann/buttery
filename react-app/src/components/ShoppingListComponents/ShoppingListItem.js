import React, { useState, useEffect } from "react";

const isFloat = (n) => {
  if (typeof n == "number" && !isNaN(n)) {
    if (Number.isInteger(n)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const ShoppingListItem = ({ ingredient }) => {
  const [isQuantityFloat, setIsQuantityFloat] = useState(false);

  useEffect(() => {
    setIsQuantityFloat(isFloat(ingredient.quantity));
  }, [ingredient.quantity]);

  return (
    <>
      {isQuantityFloat ? ingredient.quantity.toFixed(2) : ingredient.quantity}{" "}
      {ingredient.measurement} {ingredient.name}
    </>
  );
};

export default ShoppingListItem;

//
