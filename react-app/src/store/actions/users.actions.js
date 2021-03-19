export const USER_AUTH = "USER_AUTH";
export const USER_AUTH_ERROR = "USER_AUTH_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const SIGN_UP_USER = "SIGN_UP_USER";
export const SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR";
// const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
// const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const userAuth = (user) => {
  return {
    type: USER_AUTH,
    payload: user,
  };
};

export const userAuthErr = (err) => {
  return {
    type: USER_AUTH_ERROR,
    payload: err,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const logIn = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const logInError = (e) => {
  return {
    type: LOGIN_USER_ERROR,
    payload: e,
  };
};

export const signUpUser = (user) => {
  return {
    type: SIGN_UP_USER,
    payload: user,
  };
};
export const signUpUserError = (e) => {
  return {
    type: SIGN_UP_USER_ERROR,
    payload: e,
  };
};
