export const GET_INGREDIENTS = "/api/ingredients/options";

export const getIngredients = (ingredients) => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredients,
  };
};
