import _ from "lodash";
import { authenticate } from "../services/auth";

const GET_USER = "/api/auth";

const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

export const user = () => async (dispatch) => {
  const user = await authenticate();
  dispatch(getUser(user));

  return user;
};

const usersReducer = (state = { sessionUser: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = action.payload;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
