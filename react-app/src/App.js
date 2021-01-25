import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MetroSpinner } from "react-spinners-kit";
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

// import * as ingredientActions from "./store/ingredients";
// import * as measurementActions from "./store/measurements";
// import * as userActions from "./store/users";
// import * as categoryActions from "./store/categories";
import * as recipeActions from "./store/recipes";
import * as pantryActions from "./store/pantries";
// import * as cookingListActions from "./store/cookingLists";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.users.sessionUser);

  useEffect(() => {
    if (sessionUser) {
      setLoaded(true);
      dispatch(pantryActions.getUserPantryItems(sessionUser.id));
      dispatch(recipeActions.getAllRecipes(sessionUser.id));
    }
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
        </ProtectedRoute>
        <ProtectedRoute path="/recipes/:id" exact={true}>
          <Recipe></Recipe>
        </ProtectedRoute>
        <ProtectedRoute path="/pantry" exact={true}>
          <Pantry></Pantry>
        </ProtectedRoute>
        <ProtectedRoute path="/new-recipe" exact={true}>
          <RecipeForm user={sessionUser} />
        </ProtectedRoute>
        <ProtectedRoute path="/add-to-pantry" exact={true}>
          <PantryForm />
        </ProtectedRoute>
        <ProtectedRoute path="/recipes" exact={true}>
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
