import React from "react";

const ShoppingListItem = ({ ingredient }) => {
  return (
    <>
      {ingredient.name} {ingredient.quantity} {ingredient.measurement}
    </>
  );
};

export default ShoppingListItem;

//
