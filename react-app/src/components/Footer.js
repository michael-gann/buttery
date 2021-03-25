import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-line"> </div>
      <div className="inner-footer-container">
        <div className="about">
          <h2>About</h2>
          <a
            rel="noopener noreferrer"
            href="https://github.com/michael-gann/buttery"
            target="_blank"
          >
            buttery
          </a>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/michael-gann-1a2161201/"
              target="_blank"
            >
              {`Michael Gann `}
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/michael-gann"
              target="_blank"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </div>
        </div>
        <div className="site-nav">
          <div>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div>
            <NavLink to="/recipes">Recipes</NavLink>
          </div>
          <div>
            <NavLink to="/pantry">Pantry</NavLink>
          </div>
        </div>
      </div>
      <div className="bottom-footer">Copyright 2020 Michael Gann</div>
    </div>
  );
};

export default Footer;
