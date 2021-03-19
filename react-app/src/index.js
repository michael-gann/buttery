import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./store/reducers/rootReducer.reducer";

import * as userActions from "./store/reducers/users.reducer";
import * as categoryActions from "./store/reducers/categories.reducer";
import * as measurementActions from "./store/reducers/measurements.reducer";
import * as ingredientActions from "./store/reducers/ingredients.reducer";

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
