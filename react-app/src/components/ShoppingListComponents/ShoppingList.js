import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ShoppingListItems from "../ShoppingListComponents/ShoppingListItem";

import * as cookingListActions from "../../store/cookingLists";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const numberOfRecipesToShop = useSelector(
    (state) => state.cookingLists.recipesToShop.length
  );
  const ingredientsToShop = useSelector((state) =>
    Object.values(state.cookingLists.shoppingList).filter((i) => i.quantity > 0)
  );

  useEffect(() => {
    dispatch(cookingListActions.getShoppingList(1));
  }, [dispatch, numberOfRecipesToShop]);

  return (
    <>
      <div>SHOPPING LIST</div>
      <div>you are shopping for {numberOfRecipesToShop} recipes</div>
      <>
        {ingredientsToShop ? (
          ingredientsToShop.map((i) => {
            return (
              <div key={i.name}>
                <ShoppingListItems ingredient={i}></ShoppingListItems>
              </div>
            );
          })
        ) : (
          <div>There's nothing to shop for!</div>
        )}
      </>
    </>
  );
};

export default ShoppingList;
