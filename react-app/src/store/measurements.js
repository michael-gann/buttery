import _ from "lodash";

const GET_MEASUREMENTS = "/api/measurements/options";

const getMeasurements = (measurements) => {
  return {
    type: GET_MEASUREMENTS,
    payload: measurements,
  };
};

export const measurements = () => async (dispatch) => {
  const res = await fetch("/api/measurements/options");
  const measurementData = await res.json();
  dispatch(getMeasurements(measurementData));

  return res;
};

const measurementsReducer = (state = { measurements: null }, action) => {
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
