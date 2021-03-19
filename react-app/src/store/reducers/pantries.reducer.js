import _ from "lodash";

import {
  GET_PANTRIES_BEGIN,
  GET_PANTRIES_SUCCESS,
  UPDATE_PANTRIES_BEGIN,
  UPDATE_PANTRIES_SUCCESS,
  getPantriesBegin,
  getPantriesSuccess,
  updatePantriesBegin,
  updatePantriesSuccess,
} from "../actions/pantries.actions";

export const getUserPantryItems = (userId) => async (dispatch) => {
  dispatch(getPantriesBegin());

  const res = await fetch(`/api/pantries/user-pantry?userId=${userId}`);
  const pantriesData = await res.json();

  dispatch(getPantriesSuccess(pantriesData));

  return res;
};

export const updateUserPantryItems = (form) => async (dispatch) => {
  dispatch(updatePantriesBegin());

  const res = await fetch(`/api/pantries/update-pantry`, {
    method: "PUT",
    body: form,
  });
  const updateData = await res.json();

  dispatch(updatePantriesSuccess(updateData));

  return res;
};

const pantriesReducer = (
  state = { pantries: [], pantryCopy: [], loading: false },
  action
) => {
  let newState;
  switch (action.type) {
    case GET_PANTRIES_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case GET_PANTRIES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.pantries = action.payload;
      return newState;
    case UPDATE_PANTRIES_BEGIN:
      newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    case UPDATE_PANTRIES_SUCCESS:
      newState = _.cloneDeep(state);
      newState.loading = false;
      newState.pantries = [...newState.pantries, ...action.payload];
      return newState;
    default:
      return state;
  }
};

export default pantriesReducer;
