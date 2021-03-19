import _ from "lodash";

import {
  GET_COOKING_LISTS_BEGIN,
  GET_COOKING_LISTS_SUCCESS,
  ADD_TO_SHOPPING_LIST_BEGIN,
  ADD_TO_SHOPPING_LIST_SUCCESS,
  GET_SHOPPING_LIST_BEGIN,
  GET_SHOPPING_LIST_SUCCESS,
  REMOVE_SHOPPING_LIST_ITEM_BEGIN,
  REMOVE_SHOPPING_LIST_ITEM_SUCCESS,
  RESET_SHOPPING_LIST,
  COOK_RECIPE,
  getCookingListsBegin,
  addToShoppingListBegin,
  getShoppingListBegin,
  RemoveShoppingListItemBegin,
  getCookingListsSuccess,
  addToShoppingListSuccess,
  getShoppingListSuccess,
  RemoveShoppingListItemSuccess,
  shoppingListReset,
  cookOneRecipe,
} from "../actions/cookingLists.actions";

export const getCookingList = (userId) => async (dispatch) => {
  dispatch(getCookingListsBegin());

  const res = await fetch(`/api/cooking-lists?userId=${userId}`);
  const cookingListsData = await res.json();

  dispatch(getCookingListsSuccess(cookingListsData));

  return res;
};

export const addToShoppingList = (form) => async (dispatch) => {
  dispatch(addToShoppingListBegin());

  const res = await fetch("/api/cooking-lists/add-to-shop", {
    method: "POST",
    body: form,
  });
  const shoppingListItems = await res.json();

  dispatch(addToShoppingListSuccess(shoppingListItems));

  return res;
};

export const getShoppingList = (userId) => async (dispatch) => {
  dispatch(getShoppingListBegin());

  const res = await fetch(`/api/cooking-lists/shopping-list?userId=${userId}`);
  const shoppingList = await res.json();

  dispatch(getShoppingListSuccess(shoppingList));

  return res;
};

export const removeRecipe = (id) => async (dispatch) => {
  dispatch(RemoveShoppingListItemBegin());

  const res = await fetch("/api/cooking-lists/remove-from-shop", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ recipeId: id }),
  });
  const resData = await res.json();

  dispatch(RemoveShoppingListItemSuccess(resData));

  return res;
};

export const resetShoppingList = () => async (dispatch) => {
  await dispatch(shoppingListReset());
};

export const cookRecipe = (recipeId, userId) => async (dispatch) => {
  const res = await fetch(
    `/api/cooking-lists/cook-recipe?recipeId=${recipeId}&userId=${userId}`,
    {
      method: "PATCH",
    }
  );
  await dispatch(cookOneRecipe());

  return res;
};

const cookingListsReducer = (
  state = { shoppingList: {}, recipesToShop: [], loading: false },
  action
) => {
  let newState;
  switch (action.type) {
    case GET_COOKING_LISTS_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case GET_COOKING_LISTS_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipesToShop = action.payload;
      return newState;
    case ADD_TO_SHOPPING_LIST_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case ADD_TO_SHOPPING_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipesToShop = [...newState.recipesToShop, action.payload];
      return newState;
    case GET_SHOPPING_LIST_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case GET_SHOPPING_LIST_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.shoppingList = action.payload;
      return newState;
    case REMOVE_SHOPPING_LIST_ITEM_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case REMOVE_SHOPPING_LIST_ITEM_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipesToShop = action.payload;
      return newState;
    case RESET_SHOPPING_LIST:
      newState = _.cloneDeep(state);
      newState.recipesToShop = [];
      newState.shoppingList = {};
      return newState;
    case COOK_RECIPE:
      newState = _.cloneDeep(state);
      return newState;
    default:
      return state;
  }
};

export default cookingListsReducer;
