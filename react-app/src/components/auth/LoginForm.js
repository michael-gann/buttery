import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";

import * as userActions from "../../store/users";

import "./loginform.css";

import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const SlideInLeft = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.users.authenticated);
  const errors = useSelector((state) => state.users.errors);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(userActions.loginUser(email, password));
    if (!errors) {
      return <Redirect to="/home" />;
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login-container">
      <div className="login-form-container">
        <SlideInLeft>
          <div className="loginform">
            <div className="welcome-container">
              <h2 className="welcome">Welcome back!</h2>
            </div>
            <div className="please-login-container"></div>
            <h3 className="please-login">Please Login</h3>
            <form onSubmit={onLogin}>
              <div className="errors">
                {errors.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
              <div className="email-container">
                <label htmlFor="email">Email</label>
                <input
                  className="email"
                  name="email"
                  type="text"
                  placeholder="example@protonmail.com"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div className="password-container">
                <label htmlFor="password">Password</label>
                <input
                  className="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
              <div className="sign-up-redirect">
                Don't have an account? <NavLink to="/sign-up">Sign-up</NavLink>
              </div>
            </form>
          </div>
        </SlideInLeft>
      </div>
      <div className="fun-login-image">
        <img
          alt="pantry"
          src="https://i.pinimg.com/originals/b2/d8/a7/b2d8a7e38bb0f30140183f2860d4a884.jpg"
        ></img>
      </div>
    </div>
  );
};

export default LoginForm;
