import _ from "lodash";

const GET_PANTRIES_BEGIN = "GET_PANTRIES_BEGIN";
const GET_PANTRIES_SUCCESS = "GET_PANTRIES_SUCCESS";

const getPantriesBegin = () => {
  return {
    type: GET_PANTRIES_BEGIN,
  };
};

const getPantriesSuccess = (pantries) => {
  return {
    type: GET_PANTRIES_SUCCESS,
    payload: pantries,
  };
};

export const getUserPantryItems = (userId) => async (dispatch) => {
  dispatch(getPantriesBegin());

  const res = await fetch(`/api/pantries/user-pantry?userId=${userId}`);
  const pantriesData = await res.json();

  dispatch(getPantriesSuccess(pantriesData));

  return res;
};

const pantriesReducer = (state = { pantries: [], loading: false }, action) => {
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
    default:
      return state;
  }
};

export default pantriesReducer;
