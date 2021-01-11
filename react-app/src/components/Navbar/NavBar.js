import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

import "./navbar.css";

const NavBar = ({ setAuthenticated, isAuthenticated }) => {
  return (
    <nav>
      <div className="navbar-main-container">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="logo"
              alt="buttery-logo"
              src="/images/buttery-logo.svg"
            ></img>
          </NavLink>
        </div>
        {isAuthenticated ? (
          <div className="links">
            <div>
              <NavLink to="/home" exact={true} activeClassName="active">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/recipes" exact={true} activeClassName="active">
                Recipes
              </NavLink>
            </div>
            <div>
              <div>
                <NavLink to="/pantry" exact={true} activeClassName="active">
                  Pantry
                </NavLink>
              </div>
            </div>
            <div>
              <LogoutButton setAuthenticated={setAuthenticated}></LogoutButton>
            </div>
          </div>
        ) : (
          <div className="links">
            <div></div>
            <div></div>
            <div>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </div>
            <div>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign-up
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
