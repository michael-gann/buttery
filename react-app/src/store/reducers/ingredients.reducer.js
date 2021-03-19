import _ from "lodash";

import {
  GET_INGREDIENTS,
  getIngredients,
} from "../actions/ingredients.actions";

export const ingredients = () => async (dispatch) => {
  const res = await fetch("/api/ingredients/options");
  const ingredientData = await res.json();
  dispatch(getIngredients(ingredientData));

  return res;
};

const ingredientsReducer = (state = { ingredients: [] }, action) => {
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
