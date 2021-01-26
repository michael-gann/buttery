import _ from "lodash";

const GET_PANTRIES_BEGIN = "GET_PANTRIES_BEGIN";
const GET_PANTRIES_SUCCESS = "GET_PANTRIES_SUCCESS";

const UPDATE_PANTRIES_BEGIN = "UPDATE_PANTRIES_BEGIN";
const UPDATE_PANTRIES_SUCCESS = "UPDATE_PANTRIES_SUCCESS";
// const UPDATE_PANTRIES_FAILURE = "UPDATE_PANTRIES_FAILURE";

// const CREATE_PANTRY_COPY = "CREATE_PANTRY_COPY";
// const RESET_PANTRY_COPY = "RESET_PANTRY_COPY";

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

const updatePantriesBegin = () => {
  return {
    type: UPDATE_PANTRIES_BEGIN,
  };
};

// const createPantryCopy = () => {
//   return {
//     type: CREATE_PANTRY_COPY,
//   };
// };

// const resetPantryCopy = () => {
//   return {
//     type: RESET_PANTRY_COPY,
//   };
// };

const updatePantriesSuccess = (pantryIngredients) => {
  return {
    type: UPDATE_PANTRIES_SUCCESS,
    payload: pantryIngredients,
  };
};

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

// export const pantryCopy = () => (dispatch, getState) => {
//   dispatch(createPantryCopy());

//   return;
// };

// export const resetPantry = () => (dispatch, getState) => {
//   dispatch(restPantryCopy());

//   return;
// };

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
