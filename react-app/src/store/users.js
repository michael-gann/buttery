import _ from "lodash";
import { authenticate, logout, login, signUp } from "../services/auth";

const USER_AUTH = "USER_AUTH";
const USER_AUTH_ERROR = "USER_AUTH_ERROR";
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
const SIGN_UP_USER = "SIGN_UP_USER";
const SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR";
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

const signUpUser = (user) => {
  return {
    type: SIGN_UP_USER,
    payload: user,
  };
};
const signUpUserError = (e) => {
  return {
    type: SIGN_UP_USER_ERROR,
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

export const signUpNewUser = (firstName, lastName, email, password) => async (
  dispatch
) => {
  const user = await signUp(firstName, lastName, email, password);
  dispatch(signUpUser(user));

  if (user.errors) {
    return dispatch(signUpUserError(user.errors));
  }

  return user;
};

const usersReducer = (
  state = {
    sessionUser: null,
    errors: [],
    authenticated: false,
    authErrors: [],
    signUpErrors: [],
  },
  action
) => {
  let newState;
  switch (action.type) {
    case USER_AUTH:
      newState = _.cloneDeep(state);
      newState.authenticated = true;
      newState.sessionUser = action.payload;
      newState.authErrors = [];
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
      newState.errors = [];
      return newState;
    case LOGIN_USER_ERROR:
      newState = _.cloneDeep(state);
      newState.errors = action.payload;
      newState.authenticated = false;
      return newState;
    case SIGN_UP_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = action.payload;
      newState.authenticated = true;
      newState.errors = [];
      newState.authErrors = [];
      newState.signUpErrors = [];
      return newState;
    case SIGN_UP_USER_ERROR:
      newState = _.cloneDeep(state);
      newState.signUpErrors = action.payload;
      newState.authenticated = false;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
