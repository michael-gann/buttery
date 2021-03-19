import _ from "lodash";

import {
  GET_CATEGORIES_BEGIN as BEGIN,
  GET_CATEGORIES_SUCCESS as SUCCESS,
  getCategoriesBegin,
  getCategoriesSuccess,
} from "../actions/categories.actions";

export const categories = () => async (dispatch) => {
  dispatch(getCategoriesBegin());

  const res = await fetch("/api/categories/options");
  const categoriesData = await res.json();

  dispatch(getCategoriesSuccess(categoriesData));

  return res;
};

const categoriesReducer = (
  state = { categories: [], loading: false },
  action
) => {
  let newState;
  switch (action.type) {
    case BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.categories = action.payload;
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;
