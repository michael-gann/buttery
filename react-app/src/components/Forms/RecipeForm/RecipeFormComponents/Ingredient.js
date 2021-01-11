import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Ingredient = ({ value, idx, ingredients, handleUpdateIngredient }) => {
  const type = {
    value: "ingredient",
  };
  return (
    <>
      <Autocomplete
        value={value.ingredient}
        onChange={(e, newValue) => {
          handleUpdateIngredient(idx, e, type, newValue);
        }}
        inputValue={value.ingredientInput}
        onInputChange={(event, newInputValue) => {
          handleUpdateIngredient(idx, event, type, null, newInputValue);
        }}
        id="ingredient-select"
        getOptionLabel={(o) => o.label}
        options={ingredients}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Ingredient" variant="outlined" />
        )}
      />
    </>
  );
};

export default Ingredient;
