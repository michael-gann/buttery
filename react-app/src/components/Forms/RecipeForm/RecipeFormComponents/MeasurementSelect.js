import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const MeasurementSelect = ({
  measurement,
  setMeasurement,
  measurements,
  handleRecipeIngredientChange,
  value,
  idx,
}) => {
  const type = {
    value: "measurement",
  };
  return (
    <>
      <Autocomplete
        value={value.measurement ? value.measurement : ""}
        onChange={(e, newValue) => {
          handleRecipeIngredientChange(idx, e, type, newValue);
        }}
        inputValue={measurement}
        onInputChange={(event, newInputValue) => {
          setMeasurement(newInputValue);
          handleRecipeIngredientChange(idx, event, type, null, newInputValue);
        }}
        id="measurement-select"
        getOptionLabel={(o) => o.label}
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
