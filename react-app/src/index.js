import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./store/rootReducer";

import * as userActions from "./store/users";
import * as categoryActions from "./store/categories";
import * as measurementActions from "./store/measurements";
import * as ingredientActions from "./store/ingredients";

const store = configureStore();

store.dispatch(userActions.authenticateUser());
store.dispatch(categoryActions.categories());
store.dispatch(measurementActions.measurements());
store.dispatch(ingredientActions.ingredients());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
