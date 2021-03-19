export const GET_MEASUREMENTS = "/api/measurements/options";

export const getMeasurements = (measurements) => {
  return {
    type: GET_MEASUREMENTS,
    payload: measurements,
  };
};
