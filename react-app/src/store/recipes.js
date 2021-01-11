import _ from "lodash";

const GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS";
const GET_ALL_RECIPES_BEGIN = "GET_ALL_Recipes_BEGIN";
// const GET_ALL_RECIPES_FAILURE = "GET_ALL_Recipes_FAILURE";

const ADD_RECIPE_BEGIN = "ADD_RECIPE_BEGIN";
const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

const EDIT_RECIPE_BEGIN = "EDIT_RECIPE_BEGIN";
const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
// const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE"

const getRecipesBegin = () => {
  return {
    type: GET_ALL_RECIPES_BEGIN,
  };
};

const getRecipesSuccess = (recipes) => {
  return {
    type: GET_ALL_RECIPES_SUCCESS,
    payload: recipes,
  };
};

const addRecipeSuccess = (recipe) => {
  return {
    type: ADD_RECIPE_SUCCESS,
    payload: recipe,
  };
};

const addRecipeBegin = () => {
  return {
    type: ADD_RECIPE_BEGIN,
  };
};

const addRecipeFailure = (error) => {
  return {
    type: ADD_RECIPE_FAILURE,
    payload: error,
  };
};

const editRecipeBegin = () => {
  return {
    type: EDIT_RECIPE_BEGIN,
  };
};

const editRecipeSuccess = (updatedRecipe) => {
  return {
    type: EDIT_RECIPE_SUCCESS,
    payload: updatedRecipe,
  };
};

export const getAllRecipes = (userId) => async (dispatch) => {
  dispatch(getRecipesBegin());

  const res = await fetch(`/api/recipes?userId=${userId}`);

  const recipesData = await res.json();

  dispatch(getRecipesSuccess(recipesData));

  return res;
};

export const addNewRecipe = (form) => async (dispatch) => {
  dispatch(addRecipeBegin());

  const res = await fetch("/api/recipes", {
    method: "POST",
    body: form,
  });

  try {
    const newRecipe = await res.json();
    dispatch(addRecipeSuccess(newRecipe));
    // if error throw error message
  } catch (e) {
    dispatch(addRecipeFailure(e));
  }
};

export const editRecipe = (form) => async (dispatch) => {
  dispatch(editRecipeBegin());

  const res = await fetch("/api/recipes", {
    method: "POST",
    body: form,
  });

  try {
    const edittedRecipe = await res.json();
    dispatch(editRecipeSuccess(edittedRecipe));
    // if error throw error message
  } catch (e) {
    // dispatch(editRecipeFailure(e));
  }
};

const updateState = (oldState, payload) => {
  const stateCopy = oldState.slice();

  const keyToUpdate = Object.keys(payload)[0];

  return stateCopy.map((r, idx) => {
    if (
      r[keyToUpdate] !== undefined &&
      `${r[keyToUpdate].id}` === keyToUpdate
    ) {
      return {
        ...payload,
      };
    }
    return r;
  });
};

const recipesReducer = (
  state = { recipes: [], errors: [], loading: false },
  action
) => {
  let newState;
  switch (action.type) {
    case GET_ALL_RECIPES_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case GET_ALL_RECIPES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipes = action.payload;
      return newState;
    case ADD_RECIPE_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case ADD_RECIPE_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipes = [...newState.recipes, action.payload];
      return newState;
    case ADD_RECIPE_FAILURE:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.errors = action.payload;
      return newState;
    case EDIT_RECIPE_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case EDIT_RECIPE_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      const updatedState = updateState(newState.recipes, action.payload);
      newState.recipes = updatedState;
      return newState;
    default:
      return state;
  }
};

export default recipesReducer;
