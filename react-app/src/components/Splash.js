import React from "react";

import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import "./splash.css";

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

const Splash = () => {
  return (
    <div className="splashpage-container">
      <div className="splashpage-text-container">
        <div className="buttery-welcome">
          <BouncyDiv>
            {" "}
            <div>Welcome to buttery</div>{" "}
          </BouncyDiv>
        </div>

        <div className="splash-description-1">
          Do you love to bake, cook, or otherwise be in a kitchen?
        </div>
        <div className="splash-description-2">
          Do you struggle with figuring out what to add to your shopping list
          when it comes time to cook?
        </div>
        <div className="splash-description-3">
          Well then, here's something for you....{" "}
        </div>
        <div className="splash-description-4">
          With buttery, you can add your favorite recipes and have a shopping
          list generated for you!
        </div>
      </div>
    </div>
  );
};

export default Splash;
