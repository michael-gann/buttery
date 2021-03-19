import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RecipeForm from "./components/Forms/RecipeForm/RecipeForm";
import PantryForm from "./components/Forms/PantryForm/PantryForm";
import Home from "./components/Homepage/Home";
import Splash from "./components/Splash";
import Recipes from "./components/RecipesPage/Recipes";
import Recipe from "./components/RecipePage/Recipe";
import Pantry from "./components/PantryPage/Pantry";
import Footer from "./components/Footer";

import * as recipeActions from "./store/reducers/recipes.reducer";
import * as pantryActions from "./store/reducers/pantries.reducer";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    if (sessionUser) {
      dispatch(pantryActions.getUserPantryItems(sessionUser.id));
      dispatch(recipeActions.getAllRecipes(sessionUser.id));
    }
    setLoaded(true);
  }, [dispatch, sessionUser]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/" exact={true}>
          <Splash></Splash>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/home" exact={true}>
          <Home></Home>
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/recipes/:id" exact={true}>
          <Recipe></Recipe>
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/pantry" exact={true}>
          <Pantry></Pantry>
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/new-recipe" exact={true}>
          <RecipeForm user={sessionUser} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/add-to-pantry" exact={true}>
          <PantryForm />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/recipes" exact={true}>
          <Recipes></Recipes>
          <Footer />
        </ProtectedRoute>
        <Route route="*">
          <h1>page not found!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
