import React from "react";

import Step from "./Step";

const Steps = ({ steps }) => {
  return (
    <>
      {steps &&
        steps.map((s, idx) => {
          return (
            <div key={idx}>
              <Step step={s} />
            </div>
          );
        })}
    </>
  );
};

export default Steps;
