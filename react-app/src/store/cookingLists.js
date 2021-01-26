import _ from "lodash";

const GET_COOKING_LISTS_BEGIN = "GET_COOKING_LISTS_BEGIN";
const GET_COOKING_LISTS_SUCCESS = "GET_COOKING_LISTS_SUCCESS";
// const GET_COOKING_LISTS_FAILURE = "GET_COOKING_LISTS_FAILURE";

const ADD_TO_SHOPPING_LIST_BEGIN = "ADD_TO_SHOPPING_LIST_BEGIN";
const ADD_TO_SHOPPING_LIST_SUCCESS = "ADD_TO_SHOPPING_LIST_SUCCESS";
// const ADD_TO_SHOPPING_LIST_FAILURE = "ADD_TO_SHOPPING_LIST_FAILURE"

const GET_SHOPPING_LIST_BEGIN = "GET_SHOPPING_LIST_BEGIN";
const GET_SHOPPING_LIST_SUCCESS = "GET_SHOPPING_LIST_SUCCESS";
// const GET_SHOPPING_LIST_FAILURE = "GET_SHOPPING_LIST_FAILURE"

const REMOVE_SHOPPING_LIST_ITEM_BEGIN = "REMOVE_SHOPPING_LIST_ITEM_BEGIN";
const REMOVE_SHOPPING_LIST_ITEM_SUCCESS = "REMOVE_SHOPPING_LIST_ITEM_SUCCESS";
// const GET_SHOPPING_LIST_FAILURE = "GET_SHOPPING_LIST_FAILURE"

const getCookingListsBegin = () => {
  return {
    type: GET_COOKING_LISTS_BEGIN,
  };
};

const addToShoppingListBegin = () => {
  return {
    type: ADD_TO_SHOPPING_LIST_BEGIN,
  };
};

const getShoppingListBegin = () => {
  return {
    type: GET_SHOPPING_LIST_BEGIN,
  };
};

const RemoveShoppingListItemBegin = () => {
  return {
    type: REMOVE_SHOPPING_LIST_ITEM_BEGIN,
  };
};

const getCookingListsSuccess = (categories) => {
  return {
    type: GET_COOKING_LISTS_SUCCESS,
    payload: categories,
  };
};

const addToShoppingListSuccess = (recipe) => {
  return {
    type: ADD_TO_SHOPPING_LIST_SUCCESS,
    payload: recipe,
  };
};

const getShoppingListSuccess = (shoppingList) => {
  return {
    type: GET_SHOPPING_LIST_SUCCESS,
    payload: shoppingList,
  };
};

const RemoveShoppingListItemSuccess = (recipe) => {
  return {
    type: REMOVE_SHOPPING_LIST_ITEM_SUCCESS,
    payload: recipe,
  };
};

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

// const updateShoppingList = (oldState, newState) => {
//   // const copyState = Object.assign(oldState, {});

//   if (Object.keys(newState).length === 0) {
//     return {};
//   }

//   if (Object.keys(oldState).length > Object.keys(newState).length) {
//     return newState;
//   }

//   const mergedState = { ...oldState, ...newState };

//   for (const key in mergedState) {
//     if (newState[key] === undefined) {
//       continue;
//     } else if (mergedState[key].name === newState[key].name) {
//       mergedState[key] = { ...mergedState[key], ...newState[key] };
//     }

//     for (const key in newState) {
//       if (mergedState[key] === undefined) {
//         mergedState[key] = { ...newState[key] };
//       }
//     }
//   }

//   return mergedState;
// };

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
      // newState.shoppingList = updateShoppingList(
      //   newState.shoppingList,
      //   action.payload
      // );
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
    default:
      return state;
  }
};

export default cookingListsReducer;
