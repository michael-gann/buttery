import _ from "lodash";
import { authenticate, logout, login } from "../services/auth";

const USER_AUTH = "USER_AUTH";
const USER_AUTH_ERROR = "USER_AUTH_ERROR";
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
// const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
// const SIGN_UP_ERROR = "SIGN_UP_ERROR";

const userAuth = (user) => {
  return {
    type: USER_AUTH,
    payload: user,
  };
};

const userAuthErr = (err) => {
  return {
    type: USER_AUTH_ERROR,
    payload: err,
  };
};

const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};

const logIn = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
const logInError = (e) => {
  return {
    type: LOGIN_USER_ERROR,
    payload: e,
  };
};

export const authenticateUser = () => async (dispatch) => {
  const response = await authenticate();

  if (response.errors) {
    return dispatch(userAuthErr(response.errors));
  }
  dispatch(userAuth(response));

  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await logout();
  dispatch(logOut());

  return response;
};

export const loginUser = (email, password) => async (dispatch) => {
  const user = await login(email, password);
  dispatch(logIn(user));

  if (user.errors) {
    return dispatch(logInError(user.errors));
  }

  return user;
};

const usersReducer = (
  state = {
    sessionUser: null,
    errors: [],
    authenticated: false,
    authErrors: [],
  },
  action
) => {
  let newState;
  switch (action.type) {
    case USER_AUTH:
      newState = _.cloneDeep(state);
      newState.authenticated = true;
      newState.sessionUser = action.payload;
      return newState;
    case USER_AUTH_ERROR:
      newState = _.cloneDeep(state);
      newState.authenticated = false;
      newState.sessionUser = null;
      newState.authErrors = action.payload;
      return newState;
    case LOGOUT_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = null;
      newState.authenticated = false;
      return newState;
    case LOGIN_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = action.payload;
      newState.authenticated = true;
      return newState;
    case LOGIN_USER_ERROR:
      newState = _.cloneDeep(state);
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
