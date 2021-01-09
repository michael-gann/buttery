import _ from "lodash";

const GET_INGREDIENTS = "/api/ingredients/options";

const getIngredients = (ingredients) => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredients,
  };
};

export const ingredients = () => async (dispatch) => {
  const res = await fetch("/api/ingredients/options");
  const ingredientData = await res.json();
  dispatch(getIngredients(ingredientData));

  return res;
};

const ingredientsReducer = (state = { ingredients: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_INGREDIENTS:
      newState = _.cloneDeep(state);
      newState.ingredients = action.payload;
      return newState;
    default:
      return state;
  }
};

export default ingredientsReducer;
