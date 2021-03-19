export const GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS";
export const GET_ALL_RECIPES_BEGIN = "GET_ALL_RECIPES_BEGIN";
// const GET_ALL_RECIPES_FAILURE = "GET_ALL_Recipes_FAILURE";

export const ADD_RECIPE_BEGIN = "ADD_RECIPE_BEGIN";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const EDIT_RECIPE_BEGIN = "EDIT_RECIPE_BEGIN";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
// const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE"

export const SET_RECIPE_DISTANCE = "SET_RECIPE_DISTANCE";

export const getRecipesBegin = () => {
  return {
    type: GET_ALL_RECIPES_BEGIN,
  };
};

export const getRecipesSuccess = (recipes) => {
  return {
    type: GET_ALL_RECIPES_SUCCESS,
    payload: recipes,
  };
};

export const addRecipeSuccess = (recipe) => {
  return {
    type: ADD_RECIPE_SUCCESS,
    payload: recipe,
  };
};

export const addRecipeBegin = () => {
  return {
    type: ADD_RECIPE_BEGIN,
  };
};

export const addRecipeFailure = (error) => {
  return {
    type: ADD_RECIPE_FAILURE,
    payload: error,
  };
};

export const editRecipeBegin = () => {
  return {
    type: EDIT_RECIPE_BEGIN,
  };
};

export const editRecipeSuccess = (updatedRecipe) => {
  return {
    type: EDIT_RECIPE_SUCCESS,
    payload: updatedRecipe,
  };
};

export const setDistance = (distance, id) => {
  return {
    type: SET_RECIPE_DISTANCE,
    payload: { distance, key: id },
  };
};
