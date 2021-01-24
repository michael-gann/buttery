import React from "react";

const ShoppingListItem = ({ ingredient }) => {
  return (
    <>
      {ingredient.quantity} {ingredient.measurement} {ingredient.name}
    </>
  );
};

export default ShoppingListItem;

//
