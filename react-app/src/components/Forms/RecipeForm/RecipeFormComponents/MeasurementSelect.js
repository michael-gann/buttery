import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const MeasurementSelect = ({
  // measurement,
  // setMeasurement,
  measurements,
  handleRecipeIngredientChange,
  value,
  idx,
}) => {
  console.log("VALUE FROM MEASUREMENT", value);
  const type = {
    value: "measurement",
  };
  return (
    <>
      <Autocomplete
        value={value.measurement}
        onChange={(e, newValue) => {
          handleRecipeIngredientChange(idx, e, type, newValue);
        }}
        inputValue={value.measurementInput}
        onInputChange={(event, newInputValue) => {
          handleRecipeIngredientChange(idx, event, type, null, newInputValue);
        }}
        id="measurement-select"
        getOptionLabel={(o) => o.label}
        getOptionSelected={(o1, o2) =>
          o1.label === o2.label && o1.value === o2.value
        }
        options={measurements}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Measurement" variant="outlined" />
        )}
      />
    </>
  );
};

export default MeasurementSelect;
