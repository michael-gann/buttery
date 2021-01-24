import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import styled, { keyframes } from "styled-components";
// import { fadeInLeft } from "react-animations";

import ShoppingListItems from "../ShoppingListComponents/ShoppingListItem";

import * as cookingListActions from "../../store/cookingLists";

// const fadeInAnimation = keyframes`${fadeInLeft}`;

// const FadeInLeft = styled.div`
// animation: 1s ${fadeInAnimation};
// `;

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
        {/* <div className="shopping-for">
          You are shopping for {numberOfRecipesToShop} recipes
        </div> */}
        {ingredientsToShop ? (
          ingredientsToShop.map((i, idx) => {
            return (
              // <FadeInLeft classname="shopping-list-item">
              <div className="shopping-list-individual-items" key={idx}>
                <ShoppingListItems ingredient={i}></ShoppingListItems>
              </div>
              // {/* </FadeInLeft> */}
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
