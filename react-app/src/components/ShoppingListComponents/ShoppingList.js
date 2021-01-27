import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import { fadeInLeft } from "react-animations";

import ShoppingListItems from "../ShoppingListComponents/ShoppingListItem";

import * as cookingListActions from "../../store/cookingLists";

// const fadeInAnimation = keyframes`${fadeInLeft}`;

// const FadeInLeft = styled.div`
// animation: 1s ${fadeInAnimation};
// `;

const ShoppingList = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const ingredientsToShop = useSelector((state) =>
    Object.values(state.cookingLists.shoppingList).filter((i) => i.quantity > 0)
  );

  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    dispatch(cookingListActions.getCookingList(sessionUser.id));
    dispatch(cookingListActions.getShoppingList(sessionUser.id));
  }, [dispatch, sessionUser.id]);

  return (
    <>
      <div className="shopping-list-items-container">
        {ingredientsToShop.length ? (
          ingredientsToShop.map((i, idx) => {
            return (
              <div className="shopping-list-individual-items" key={idx}>
                <ShoppingListItems ingredient={i}></ShoppingListItems>
              </div>
            );
          })
        ) : (
          <div className="not-shopping">
            <div className="sentence-1">
              Looks like you aren't shopping for anything...
            </div>
            <div className="sentence-2">
              Go find some <NavLink to="/recipes">recipes</NavLink> to make!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingList;
