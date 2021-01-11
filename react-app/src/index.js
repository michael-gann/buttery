import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./store/rootReducer";
// import * as recipeActions from "./store/recipes";
// import * as pantryActions from "./store/pantries";
import * as categoryActions from "./store/categories";

const store = configureStore();

// store.dispatch(recipeActions.getAllRecipes());
// store.dispatch(pantryActions.getUserPantryItems());
store.dispatch(categoryActions.categories());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
