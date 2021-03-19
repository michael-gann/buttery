import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ingredientsReducer from "./ingredients.reducer";
import measurementsReducer from "./measurements.reducer";
import recipesReducer from "./recipes.reducer";
import usersReducer from "./users.reducer";
import categoriesReducer from "./categories.reducer";
import pantriesReducer from "./pantries.reducer";
import cookingListsReducer from "./cookingLists.reducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  measurements: measurementsReducer,
  recipes: recipesReducer,
  users: usersReducer,
  categories: categoriesReducer,
  pantries: pantriesReducer,
  cookingLists: cookingListsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
