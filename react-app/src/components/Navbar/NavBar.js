import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import LogoutButton from "../auth/LogoutButton";

import "./navbar.css";

import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";

const slideInDownAnimation = keyframes`${slideInDown}`;

const SlideInDown = styled.div`
  animation: 0.8s ${slideInDownAnimation};
`;

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.users.authenticated);
  return (
    <nav>
      <SlideInDown>
        <div className="navbar-main-container">
          <div className="logo">
            <NavLink to="/" exact={true} activeClassName="active">
              <img
                className="logo"
                alt="buttery-logo"
                src="../images/buttery-logo.svg"
              ></img>
            </NavLink>
          </div>
          {isAuthenticated ? (
            <div className="links">
              <div className="nav-home">
                <NavLink to="/home" exact={true} activeClassName="active">
                  Home
                </NavLink>
              </div>
              <div className="nav-recipes">
                <NavLink to="/recipes" exact={true} activeClassName="active">
                  Recipes
                </NavLink>
              </div>
              <div>
                <div className="nav-pantry">
                  <NavLink to="/pantry" exact={true} activeClassName="active">
                    Pantry
                  </NavLink>
                </div>
              </div>
              <div className="nav-logout-button">
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
