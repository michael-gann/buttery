import React from "react";

const Step = ({ step }) => {
  return (
    <>
      <div>
        {step.step_number} {step.content}
      </div>
    </>
  );
};

export default Step;
