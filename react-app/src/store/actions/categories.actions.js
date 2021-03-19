export const GET_CATEGORIES_BEGIN = "GET_CATEGORIES_BEGIN";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

export const getCategoriesBegin = () => {
  return {
    type: GET_CATEGORIES_BEGIN,
  };
};

export const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};
