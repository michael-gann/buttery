import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ShoppingListItems from "../ShoppingListComponents/ShoppingListItem";

import * as cookingListActions from "../../store/cookingLists";
// TODO:
// IoStorefront IMPORT ICONS FROM REACT ICONS/IO

const ShoppingList = () => {
  const dispatch = useDispatch();
  const numberOfRecipesToShop = useSelector(
    (state) => state.cookingLists.recipesToShop.length
  );
  const ingredientsToShop = useSelector((state) =>
    Object.values(state.cookingLists.shoppingList).filter((i) => i.quantity > 0)
  );

  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    dispatch(cookingListActions.getShoppingList(sessionUser.id));
  }, [dispatch, numberOfRecipesToShop, sessionUser.id]);

  return (
    <>
      <div className="shopping-list-items-container">
        <div>you are shopping for {numberOfRecipesToShop} recipes</div>
        {ingredientsToShop ? (
          ingredientsToShop.map((i) => {
            return (
              <div key={i.name} className="shopping-list-item">
                <ShoppingListItems ingredient={i}></ShoppingListItems>
              </div>
            );
          })
        ) : (
          <div>There's nothing to shop for!</div>
        )}
      </div>
    </>
  );
};

export default ShoppingList;
