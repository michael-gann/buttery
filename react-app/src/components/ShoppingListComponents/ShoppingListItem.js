import React from "react";

const ShoppingListItem = ({ ingredient }) => {
  return (
    <>
      <div>
        {ingredient.name} {ingredient.quantity} {ingredient.measurement}
      </div>
    </>
  );
};

export default ShoppingListItem;

//
