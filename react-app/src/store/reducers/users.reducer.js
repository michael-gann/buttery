import _ from "lodash";
import { authenticate, logout, login, signUp } from "../../services/auth";

import * as actions from "../actions/users.actions";

export const authenticateUser = () => async (dispatch) => {
  const response = await authenticate();

  if (response.errors) {
    return dispatch(actions.userAuthErr(response.errors));
  }
  dispatch(actions.userAuth(response));

  return response;
};

export const logoutUser = () => async (dispatch) => {
  const response = await logout();
  dispatch(actions.logOut());

  return response;
};

export const loginUser = (email, password) => async (dispatch) => {
  const user = await login(email, password);
  dispatch(actions.logIn(user));

  if (user.errors) {
    return dispatch(actions.logInError(user.errors));
  }

  return user;
};

export const signUpNewUser = (firstName, lastName, email, password) => async (
  dispatch
) => {
  const user = await signUp(firstName, lastName, email, password);
  dispatch(actions.signUpUser(user));

  if (user.errors) {
    return dispatch(actions.signUpUserError(user.errors));
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
    case actions.USER_AUTH:
      newState = _.cloneDeep(state);
      newState.authenticated = true;
      newState.sessionUser = action.payload;
      newState.authErrors = [];
      return newState;
    case actions.USER_AUTH_ERROR:
      newState = _.cloneDeep(state);
      newState.authenticated = false;
      newState.sessionUser = null;
      newState.authErrors = action.payload;
      return newState;
    case actions.LOGOUT_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = null;
      newState.authenticated = false;
      return newState;
    case actions.LOGIN_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = action.payload;
      newState.authenticated = true;
      newState.errors = [];
      return newState;
    case actions.LOGIN_USER_ERROR:
      newState = _.cloneDeep(state);
      newState.errors = action.payload;
      newState.authenticated = false;
      return newState;
    case actions.SIGN_UP_USER:
      newState = _.cloneDeep(state);
      newState.sessionUser = action.payload;
      newState.authenticated = true;
      newState.errors = [];
      newState.authErrors = [];
      newState.signUpErrors = [];
      return newState;
    case actions.SIGN_UP_USER_ERROR:
      newState = _.cloneDeep(state);
      newState.signUpErrors = action.payload;
      newState.authenticated = false;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
