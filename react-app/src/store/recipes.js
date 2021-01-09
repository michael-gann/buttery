import _ from "lodash";

const GET_RECIPES = "/api/recipes";

const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    payload: recipes,
  };
};

export const userRecipes = () => async (dispatch) => {
  const res = await fetch("/api/recipes?userId=1");
  const recipesData = await res.json();
  dispatch(getRecipes(recipesData));

  return res;
};

const recipesReducer = (state = { recipes: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_RECIPES:
      newState = _.cloneDeep(state);
      newState.recipes = action.payload;
      return newState;
    default:
      return state;
  }
};

export default recipesReducer;
