import _ from "lodash";

const GET_CATEGORIES_BEGIN = "GET_CATEGORIES_BEGIN";
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

const getCategoriesBegin = () => {
  return {
    type: GET_CATEGORIES_BEGIN,
  };
};

const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

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
    case GET_CATEGORIES_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case GET_CATEGORIES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.categories = action.payload;
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;
