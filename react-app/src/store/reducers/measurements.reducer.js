import _ from "lodash";

import {
  GET_MEASUREMENTS,
  getMeasurements,
} from "../actions/measurements.actions";

export const measurements = () => async (dispatch) => {
  const res = await fetch("/api/measurements/options");
  const measurementData = await res.json();
  dispatch(getMeasurements(measurementData));

  return res;
};

const measurementsReducer = (state = { measurements: [] }, action) => {
  let newState;
  switch (action.type) {
    case GET_MEASUREMENTS:
      newState = _.cloneDeep(state);
      newState.measurements = action.payload;
      return newState;
    default:
      return state;
  }
};

export default measurementsReducer;
