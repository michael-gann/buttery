import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const MeasurementSelect = ({
  // measurement,
  // setMeasurement,
  measurements,
  handleUpdateIngredient,
  value,
  idx,
}) => {
  const type = {
    value: "measurement",
  };
  return (
    <>
      <Autocomplete
        value={value.measurement}
        onChange={(e, newValue) => {
          handleUpdateIngredient(idx, e, type, newValue);
        }}
        inputValue={value.measurementInput}
        onInputChange={(event, newInputValue) => {
          handleUpdateIngredient(idx, event, type, null, newInputValue);
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
