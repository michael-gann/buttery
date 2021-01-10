import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import { authenticate } from "./services/auth";
import RecipeForm from "./components/Forms/RecipeForm/RecipeForm";
import Home from "./components/Homepage/Home";
import Splash from "./components/Splash";
import Recipes from "./components/RecipesPage/Recipes";
import Recipe from "./components/RecipePage/Recipe";
import Pantry from "./components/PantryPage/Pantry";

import * as ingredientActions from "./store/ingredients";
import * as measurementActions from "./store/measurements";
import * as userActions from "./store/users";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sessionUser, setSessionUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setSessionUser(user);
      }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    dispatch(userActions.user());
    dispatch(ingredientActions.ingredients());
    dispatch(measurementActions.measurements());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  // <Route path="/test-form" exact={true}>
  //         <RecipeForm></RecipeForm>
  //       </Route>

  return (
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        isAuthenticated={authenticated}
      />
      <Switch>
        <Route path="/" exact={true}>
          <Splash></Splash>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Home></Home>
        </ProtectedRoute>
        <ProtectedRoute
          path="/recipes/:id"
          exact={true}
          authenticated={authenticated}
        >
          <Recipe></Recipe>
        </ProtectedRoute>
        <ProtectedRoute
          path="/pantry"
          exact={true}
          authenticated={authenticated}
        >
          <Pantry></Pantry>
        </ProtectedRoute>
        <ProtectedRoute
          path="/new-recipe"
          exact={true}
          authenticated={authenticated}
        >
          <RecipeForm user={sessionUser} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/recipes"
          exact={true}
          authenticated={authenticated}
        >
          <Recipes></Recipes>
        </ProtectedRoute>
        <Route route="*">
          <h1>page not found!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
