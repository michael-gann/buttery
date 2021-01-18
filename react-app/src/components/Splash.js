import React from "react";

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import "./splash.css";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInFaster = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

const FadeInSlower = styled.div`
  animation: 3s ${fadeInAnimation};
`;

const Splash = () => {
  return (
    <div className="splashpage-container">
      <div className="splashpage-text-container">
        <FadeInFaster>
          <div className="splash-description-1">
            <div className="text-1">Streamlining your cooking process...</div>
          </div>
        </FadeInFaster>

        <FadeInSlower className>
          <div className="splash-description-2">
            <div className="text-2">Is only a step away</div>
            <button className="splash-sign-up">Sign-up</button>
          </div>
        </FadeInSlower>
      </div>
    </div>
  );
};

export default Splash;
