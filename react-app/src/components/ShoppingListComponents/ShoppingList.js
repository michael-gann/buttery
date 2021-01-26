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

  const ingredientsToShop = useSelector((state) =>
    Object.values(state.cookingLists.shoppingList).filter((i) => i.quantity > 0)
  );

  // if (!ingredientsToShop) {
  //         dispatch(cookingListActions.getShoppingList(sessionUser.id));
  // }

  console.log("--INGREDIENTS IN SHOPPING LIST--", ingredientsToShop);

  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    dispatch(cookingListActions.getCookingList(sessionUser.id));
    dispatch(cookingListActions.getShoppingList(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  return (
    <>
      <div className="shopping-list-items-container">
        {/* <div className="shopping-for">
          You are shopping for} recipes
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
