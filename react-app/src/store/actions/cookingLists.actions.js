export const GET_COOKING_LISTS_BEGIN = "GET_COOKING_LISTS_BEGIN";
export const GET_COOKING_LISTS_SUCCESS = "GET_COOKING_LISTS_SUCCESS";
// const GET_COOKING_LISTS_FAILURE = "GET_COOKING_LISTS_FAILURE";

export const ADD_TO_SHOPPING_LIST_BEGIN = "ADD_TO_SHOPPING_LIST_BEGIN";
export const ADD_TO_SHOPPING_LIST_SUCCESS = "ADD_TO_SHOPPING_LIST_SUCCESS";
// const ADD_TO_SHOPPING_LIST_FAILURE = "ADD_TO_SHOPPING_LIST_FAILURE"

export const GET_SHOPPING_LIST_BEGIN = "GET_SHOPPING_LIST_BEGIN";
export const GET_SHOPPING_LIST_SUCCESS = "GET_SHOPPING_LIST_SUCCESS";
// const GET_SHOPPING_LIST_FAILURE = "GET_SHOPPING_LIST_FAILURE"

export const REMOVE_SHOPPING_LIST_ITEM_BEGIN =
  "REMOVE_SHOPPING_LIST_ITEM_BEGIN";
export const REMOVE_SHOPPING_LIST_ITEM_SUCCESS =
  "REMOVE_SHOPPING_LIST_ITEM_SUCCESS";
// const GET_SHOPPING_LIST_FAILURE = "GET_SHOPPING_LIST_FAILURE"

export const RESET_SHOPPING_LIST = "RESET_SHOPPING_LIST";

export const COOK_RECIPE = "COOK_RECIPE";

export const getCookingListsBegin = () => {
  return {
    type: GET_COOKING_LISTS_BEGIN,
  };
};

export const addToShoppingListBegin = () => {
  return {
    type: ADD_TO_SHOPPING_LIST_BEGIN,
  };
};

export const getShoppingListBegin = () => {
  return {
    type: GET_SHOPPING_LIST_BEGIN,
  };
};

export const RemoveShoppingListItemBegin = () => {
  return {
    type: REMOVE_SHOPPING_LIST_ITEM_BEGIN,
  };
};

export const getCookingListsSuccess = (categories) => {
  return {
    type: GET_COOKING_LISTS_SUCCESS,
    payload: categories,
  };
};

export const addToShoppingListSuccess = (recipe) => {
  return {
    type: ADD_TO_SHOPPING_LIST_SUCCESS,
    payload: recipe,
  };
};

export const getShoppingListSuccess = (shoppingList) => {
  return {
    type: GET_SHOPPING_LIST_SUCCESS,
    payload: shoppingList,
  };
};

export const RemoveShoppingListItemSuccess = (recipe) => {
  return {
    type: REMOVE_SHOPPING_LIST_ITEM_SUCCESS,
    payload: recipe,
  };
};

export const shoppingListReset = () => {
  return {
    type: RESET_SHOPPING_LIST,
  };
};

export const cookOneRecipe = () => {
  return {
    type: RESET_SHOPPING_LIST,
  };
};
