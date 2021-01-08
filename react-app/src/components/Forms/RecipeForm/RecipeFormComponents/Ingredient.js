import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Ingredient = ({
  value,
  idx,
  ingredients,
  ingredient,
  setIngredient,
  handleRecipeIngredientChange,
}) => {
  const type = {
    value: "ingredient",
  };
  return (
    <>
      <Autocomplete
        value={value.ingredient ? value.ingredient : ""}
        onChange={(e, newValue) => {
          handleRecipeIngredientChange(idx, e, type, newValue);
        }}
        inputValue={ingredient}
        onInputChange={(event, newInputValue) => {
          setIngredient(newInputValue);
          handleRecipeIngredientChange(idx, event, type, null, newInputValue);
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
