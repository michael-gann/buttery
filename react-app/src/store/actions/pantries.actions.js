export const GET_PANTRIES_BEGIN = "GET_PANTRIES_BEGIN";
export const GET_PANTRIES_SUCCESS = "GET_PANTRIES_SUCCESS";

export const UPDATE_PANTRIES_BEGIN = "UPDATE_PANTRIES_BEGIN";
export const UPDATE_PANTRIES_SUCCESS = "UPDATE_PANTRIES_SUCCESS";
// const UPDATE_PANTRIES_FAILURE = "UPDATE_PANTRIES_FAILURE";

export const EDIT_PANTRIES_BEGIN = "EDIT_PANTRIES BEGIN";
export const EDIT_PANTRIES_SUCCESS = "EDIT_PANTRIES_SUCCESS";

export const getPantriesBegin = () => {
  return {
    type: GET_PANTRIES_BEGIN,
  };
};

export const getPantriesSuccess = (pantries) => {
  return {
    type: GET_PANTRIES_SUCCESS,
    payload: pantries,
  };
};

export const updatePantriesBegin = () => {
  return {
    type: UPDATE_PANTRIES_BEGIN,
  };
};

export const updatePantriesSuccess = (pantryIngredients) => {
  return {
    type: UPDATE_PANTRIES_SUCCESS,
    payload: pantryIngredients,
  };
};

export const editPantriesBegin = () => {
  return {
    type: EDIT_PANTRIES_BEGIN,
  };
};

export const editPantriesSuccess = (pantryIngredient) => {
  return {
    type: EDIT_PANTRIES_SUCCESS,
    payload: pantryIngredient,
  };
};
