import _ from "lodash";

import * as actions from "../actions/recipes.actions";

export const getAllRecipes = (userId) => async (dispatch) => {
  dispatch(actions.getRecipesBegin());

  const res = await fetch(`/api/recipes?userId=${userId}`);

  const recipesData = await res.json();

  dispatch(actions.getRecipesSuccess(recipesData));

  return res;
};

export const addNewRecipe = (form) => async (dispatch) => {
  dispatch(actions.addRecipeBegin());

  const res = await fetch("/api/recipes", {
    method: "POST",
    body: form,
  });

  try {
    const newRecipe = await res.json();
    dispatch(actions.addRecipeSuccess(newRecipe));
    // if error throw error message
  } catch (e) {
    dispatch(actions.addRecipeFailure(e));
  }
};

export const editRecipe = (form) => async (dispatch) => {
  dispatch(actions.editRecipeBegin());

  const res = await fetch("/api/recipes", {
    method: "POST",
    body: form,
  });

  try {
    const edittedRecipe = await res.json();
    dispatch(actions.editRecipeSuccess(edittedRecipe));
    // if error throw error message
  } catch (e) {
    // dispatch(editRecipeFailure(e));
  }
};

export const setRecipeDistance = (distance, id) => (dispatch) => {
  dispatch(actions.setDistance(distance, id));

  return;
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
    case actions.GET_ALL_RECIPES_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case actions.GET_ALL_RECIPES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipes = action.payload;
      return newState;
    case actions.ADD_RECIPE_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case actions.ADD_RECIPE_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.recipes = [...newState.recipes, action.payload];
      return newState;
    case actions.ADD_RECIPE_FAILURE:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.errors = action.payload;
      return newState;
    case actions.EDIT_RECIPE_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case actions.EDIT_RECIPE_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      const updatedState = updateState(newState.recipes, action.payload);
      newState.recipes = updatedState;
      return newState;
    case actions.SET_RECIPE_DISTANCE:
      newState = _.cloneDeep(state);
      const target = newState.recipes.find((r) =>
        Object.keys(r).includes(action.payload.key)
      );
      target[action.payload.key].recipeDistance = action.payload.distance;
      return newState;
    default:
      return state;
  }
};

export default recipesReducer;
