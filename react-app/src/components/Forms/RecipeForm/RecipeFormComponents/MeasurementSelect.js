import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import StyledAutocomplete from "./StyledAutocomplete";

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

  console.log(measurements);
  console.log(value);
  console.log(value.measurement, value.measurementInput);
  return (
    <>
      <Autocomplete
        // open={true}
        // defaultValue={}
        // debug={true}
        value={value.measurement || ""}
        onChange={(e, newValue) => {
          handleUpdateIngredient(idx, e, type, newValue);
        }}
        inputValue={value.measurementInput || ""}
        onInputChange={(event, newInputValue) => {
          handleUpdateIngredient(idx, event, type, null, newInputValue);
        }}
        id="measurement-select"
        getOptionLabel={(o) => o.label}
        getOptionSelected={(o1, o2) =>
          (o1.label === o2.label && o1.value === o2.value) ||
          (o1.label === "" && o1.value === null)
        }
        options={measurements}
        style={{ width: 180 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Measurement"
            // variant="outlined"
            size="small"
          />
        )}
      />
    </>
  );
};

export default MeasurementSelect;
