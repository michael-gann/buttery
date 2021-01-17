import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const StyledAutocomplete = withStyles({
  root: {
    height: "20px",
    //   padding: '0 30px',
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  //   inputRoot: {
  // height: "20px",
  //   },
  //   groupLabel: {
  // height: "20px",
  //   },
})(Autocomplete);

export default function ClassesShorthand() {
  return <StyledAutocomplete></StyledAutocomplete>;
}
