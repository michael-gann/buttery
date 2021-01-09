import React from "react";

const Step = ({ step }) => {
  console.log(step);
  return (
    <>
      <div>
        {step.step_number} {step.content}
      </div>
    </>
  );
};

export default Step;
