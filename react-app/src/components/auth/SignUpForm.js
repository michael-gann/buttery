import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
// import { signUp } from "../../services/auth";

import * as userActions from "../../store/users";

import "./signupform.css";

import styled, { keyframes } from "styled-components";
import { slideInRight, headShake } from "react-animations";

const slideInRightAnimation = keyframes`${slideInRight}`;
const shakeAnimation = keyframes`${headShake}`;

const SlideInRight = styled.div`
  animation: 1s ${slideInRightAnimation};
`;

const ErrorShake = styled.div`
  animation: 0.7s ${shakeAnimation};
`;

const SignUpForm = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.users.authenticated);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passError, setPassError] = useState([]);
  const [localErrors, setLocalErrors] = useState([]);

  const onSignUp = (e) => {
    e.preventDefault();
    setPassError([]);

    if (password.length <= 8) {
      setPassError(["Password must be greater than 8 characters"]);
      return;
    }

    if (password === repeatPassword) {
      dispatch(
        userActions.signUpNewUser(first_name, last_name, email, password)
      );
    } else {
      setPassError("Passwords do not match");
    }
    return;
  };

  if (authenticated) {
    return <Redirect to="/home"></Redirect>;
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {passError.length ? (
        <div className="sign-up-container">
          <div className="fun-login-image-sign-up">
            <img
              alt="pantry"
              src="https://i.pinimg.com/originals/b2/d8/a7/b2d8a7e38bb0f30140183f2860d4a884.jpg"
            ></img>
          </div>
          <div className="sign-up-form-container">
            <SlideInRight>
              <div className="sign-up-form">
                <div className="sign-up-welcome-container">
                  <h2 className="sign-up-welcome">Welcome!</h2>
                </div>
                <h3 className="signing-up-easy">Signing up is easy</h3>
                {passError ? (
                  <div className="pass-error">{passError}</div>
                ) : (
                  <div className="pass-error"></div>
                )}
                <ErrorShake className="error-shake">
                  <form onSubmit={onSignUp}>
                    <div className="first-name-container">
                      <label>First Name</label>
                      <input
                        placeholder="Jane"
                        className="first-name"
                        type="text"
                        name="first_name"
                        onChange={updateFirstName}
                        value={first_name}
                      ></input>
                    </div>
                    <div className="last-name-container">
                      <label>Last Name</label>
                      <input
                        placeholder="Doe"
                        className="last-name"
                        type="text"
                        name="last_name"
                        onChange={updateLastName}
                        value={last_name}
                      ></input>
                    </div>
                    <div className="email-container">
                      <label>Email</label>
                      <input
                        placeholder="example@protonmail.com"
                        className="email"
                        type="email"
                        name="email"
                        onChange={updateEmail}
                        value={email}
                      ></input>
                    </div>
                    <div className="password-container">
                      <label>Password</label>
                      <input
                        placeholder="password"
                        className="password"
                        type="password"
                        name="password"
                        onChange={updatePassword}
                        value={password}
                      ></input>
                    </div>
                    <div className="confirm-password-container">
                      <label>Confirm Password</label>
                      <input
                        placeholder="confirm password"
                        className="confirm-password"
                        type="password"
                        name="repeat_password"
                        onChange={updateRepeatPassword}
                        value={repeatPassword}
                        required={true}
                      ></input>
                    </div>
                    <button className="sign-up-button" type="submit">
                      Sign-up
                    </button>
                    <div className="login-redirect">
                      Already have an account?{" "}
                      <NavLink to="/login">Login</NavLink>
                    </div>
                  </form>
                </ErrorShake>
              </div>
            </SlideInRight>
          </div>
        </div>
      ) : (
        <div className="sign-up-container">
          <div className="fun-login-image-sign-up">
            <img
              alt="pantry"
              src="https://i.pinimg.com/originals/b2/d8/a7/b2d8a7e38bb0f30140183f2860d4a884.jpg"
            ></img>
          </div>
          <div className="sign-up-form-container">
            <SlideInRight>
              <div className="sign-up-form">
                <div className="sign-up-welcome-container">
                  <h2 className="sign-up-welcome">Welcome!</h2>
                </div>
                <h3 className="signing-up-easy">Signing up is easy</h3>
                {passError ? (
                  <div className="pass-error">{passError}</div>
                ) : (
                  <div className="pass-error"></div>
                )}
                <form onSubmit={onSignUp}>
                  <div className="first-name-container">
                    <label>First Name</label>
                    <input
                      placeholder="Jane"
                      className="first-name"
                      type="text"
                      name="first_name"
                      onChange={updateFirstName}
                      value={first_name}
                    ></input>
                  </div>
                  <div className="last-name-container">
                    <label>Last Name</label>
                    <input
                      placeholder="Doe"
                      className="last-name"
                      type="text"
                      name="last_name"
                      onChange={updateLastName}
                      value={last_name}
                    ></input>
                  </div>
                  <div className="email-container">
                    <label>Email</label>
                    <input
                      placeholder="example@protonmail.com"
                      className="email"
                      type="email"
                      name="email"
                      onChange={updateEmail}
                      value={email}
                    ></input>
                  </div>
                  <div className="password-container">
                    <label>Password</label>
                    <input
                      placeholder="password"
                      className="password"
                      type="password"
                      name="password"
                      onChange={updatePassword}
                      value={password}
                    ></input>
                  </div>
                  <div className="confirm-password-container">
                    <label>Confirm Password</label>
                    <input
                      placeholder="confirm password"
                      className="confirm-password"
                      type="password"
                      name="repeat_password"
                      onChange={updateRepeatPassword}
                      value={repeatPassword}
                      required={true}
                    ></input>
                  </div>
                  <button className="sign-up-button" type="submit">
                    Sign-up
                  </button>
                  <div className="login-redirect">
                    Already have an account?{" "}
                    <NavLink to="/login">Login</NavLink>
                  </div>
                </form>
              </div>
            </SlideInRight>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
