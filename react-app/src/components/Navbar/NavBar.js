import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import LogoutButton from "../auth/LogoutButton";

import "./navbar.css";

import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";

const slideInDownAnimation = keyframes`${slideInDown}`;

const SlideInDown = styled.div`
  animation: 0.8s ${slideInDownAnimation};
`;

const NavBar = () => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.users.authenticated);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <SlideInDown>
        <div className="navbar-main-container">
          <div className="logo" onClick={handleClick}>
            <NavLink to="/" exact={true} activeClassName="active">
              <img
                className="logo"
                alt="buttery-logo"
                src="https://i.imgur.com/WRlvVJD.png"
              ></img>
            </NavLink>
          </div>
          {isAuthenticated ? (
            <div className="links">
              <div className="nav-home" onClick={handleClick}>
                <NavLink to="/home" exact={true} activeClassName="active">
                  Home
                </NavLink>
              </div>
              <div className="nav-recipes" onClick={handleClick}>
                <NavLink to="/recipes" exact={true} activeClassName="active">
                  Recipes
                </NavLink>
              </div>
              <div>
                <div className="nav-pantry" onClick={handleClick}>
                  <NavLink to="/pantry" exact={true} activeClassName="active">
                    Pantry
                  </NavLink>
                </div>
              </div>
              <div className="nav-logout-button" onClick={handleClick}>
                <LogoutButton></LogoutButton>
              </div>
            </div>
          ) : (
            <div className="links">
              <div></div>
              <div></div>
              <div className="login-link">
                <NavLink to="/login" exact={true} activeClassName="active">
                  Login
                </NavLink>
              </div>
              <div className="sign-up-link">
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                  Sign-up
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </SlideInDown>
    </nav>
  );
};

export default NavBar;
