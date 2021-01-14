import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ingredientsReducer from "./ingredients";
import measurementsReducer from "./measurements";
import recipesReducer from "./recipes";
import usersReducer from "./users";
import categoriesReducer from "./categories";
import pantriesReducer from "./pantries";
import cookingListsReducer from "./cookingLists";

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
