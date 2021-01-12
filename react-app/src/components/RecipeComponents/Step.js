import React from "react";

const Step = ({ step }) => {
  return (
    <>
      <div className="steps-container">
        <div className="step-number">{step.step_number}</div>
        <div className="step-content">{step.content}</div>
      </div>
    </>
  );
};

export default Step;
