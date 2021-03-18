import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RecipeName from "./RecipeFormComponents/RecipeName";
import RecipeContent from "./RecipeFormComponents/RecipeContent";
import RecipeStep from "./RecipeFormComponents/RecipeStep";
import RecipeIngredient from "./RecipeFormComponents/RecipeIngredient";

import * as recipeActions from "../../../store/recipes";

import "./recipeform.css";

const RecipeForm = ({ isEditing, recipeToEdit, handleEditRecipe }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const editingRecipe = useSelector((state) =>
    state.recipes.recipes.find(
      (recipe) => Object.keys(recipe)[0] === recipeToEdit
    )
  );
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const measurements = useSelector((state) => state.measurements.measurements);

  let editSteps = [];
  let editIngredients = [];

  const user = useSelector((state) => state.users.sessionUser);

  if (isEditing) {
    const steps = editingRecipe[`${recipeToEdit}`].steps;
    const ingredients = editingRecipe[`${recipeToEdit}`].ingredients;

    steps.forEach((step, idx) => {
      const editStep = {};
      editStep["value"] = step.content;
      editSteps.push(editStep);
    });

    ingredients.forEach((i) => {
      const editIngredient = {};
      editIngredient["qty"] = i.quantity;
      editIngredient["measurement"] = {
        value: i.measurement.id,
        label: i.measurement.name,
      };
      editIngredient["ingredient"] = {
        value: i.ingredient.id,
        label: i.ingredient.name,
      };
      editIngredient["measurementInput"] = i.measurement.name;
      editIngredient["ingredientInput"] = i.name;
      editIngredients.push(editIngredient);
    });
  }

  const [recipe, setRecipe] = useState(
    isEditing ? editingRecipe[`${recipeToEdit}`].name : ""
  );
  const [recipeContent, setRecipeContent] = useState(
    isEditing ? editingRecipe[`${recipeToEdit}`].content : ""
  );
  const [ingredientFields, setIngredientFields] = useState(
    isEditing
      ? editIngredients
      : [
          {
            qty: 0,
            measurement: { value: -1, label: "" },
            ingredient: { value: -1, label: "" },
            measurementInput: "",
            ingredientInput: "",
          },
        ]
  );
  const [stepFields, setStepFields] = useState(
    isEditing ? editSteps : [{ value: null }]
  );
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (i, event) => {
    const values = [...stepFields];
    values[i].value = event.target.value;
    setStepFields(values);
  };

  const handleUpdateIngredient = (idx, event, type, val, inputVal) => {
    const values = [...ingredientFields];
    switch (type.value) {
      case "quantity":
        values[idx] = { ...values[idx], qty: parseInt(event.target.value) };
        setIngredientFields(values);
        break;
      case "measurement":
        val
          ? (values[idx] = {
              ...values[idx],
              measurement: val,
              measurementInput: val.label,
            })
          : (values[idx] = {
              ...values[idx],
              measurementInput: inputVal,
            });
        setIngredientFields(values);
        break;
      case "ingredient":
        val
          ? (values[idx] = {
              ...values[idx],
              ingredient: val,
              ingredientInput: val.label,
            })
          : (values[idx] = {
              ...values[idx],
              ingredientInput: inputVal,
            });
        setIngredientFields(values);
        break;
      default:
        setIngredientFields(values);
    }
  };

  const handleAdd = () => {
    const values = [...stepFields];
    values.push({ value: null });
    setStepFields(values);
  };

  const handleRecipeIngredientAdd = () => {
    const values = [...ingredientFields];
    values.push({
      qty: 0,
      measurement: { value: -1, label: "" },
      ingredient: { value: -1, label: "" },
      measurementInput: "",
      ingredientInput: "",
    });
    setIngredientFields(values);
  };

  const handleRemove = (idx) => {
    const values = [...stepFields];
    values.splice(idx, 1);
    setStepFields(values);
  };

  const handleRecipeIngredientRemove = (idx) => {
    const values = [...ingredientFields];
    values.splice(idx, 1);
    setIngredientFields(values);
  };

  const checkIngredientFields = (fields, steps, recipeTitle, recipeInfo) => {
    // number of input values to check for the recipe
    let valuesToPass = fields.length * 3;
    valuesToPass += steps.length;
    valuesToPass += 2; // for recipe title and recipe content inputs

    let valuesPassing = 0;

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].qty !== null && fields[i].qty > 0) {
        valuesPassing++;
      }

      if (fields[i].ingredient.value !== null) {
        valuesPassing++;
      }

      if (fields[i].measurement.value !== null) {
        valuesPassing++;
      }
    }

    for (const step of steps) {
      if (step.value !== null && step.value !== "") {
        valuesPassing++;
      }
    }

    if (recipeTitle !== "") {
      valuesPassing++;
    }

    if (recipeInfo !== "") {
      valuesPassing++;
    }

    if (valuesPassing === valuesToPass) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    if (e.target.className === "disabled") {
      return;
    }

    let recipe_ingredients = {};
    let recipe_steps = {};

    ingredientFields.forEach((ingredient, i) => {
      // eslint-disable-next-line
      for (const key in ingredient) {
        recipe_ingredients[`ingredients-${i}-ingredient_id`] =
          ingredient.ingredient.value;
        recipe_ingredients[`ingredients-${i}-measurement_id`] =
          ingredient.measurement.value;
        recipe_ingredients[`ingredients-${i}-quantity`] = ingredient.qty;
      }
    });

    stepFields.forEach((step, s) => {
      // eslint-disable-next-line
      for (const key in step) {
        recipe_steps[`steps-${s}-step_number`] = s + 1;
        recipe_steps[`steps-${s}-content`] = step.value;
      }
    });

    const form = new FormData();

    if (isEditing) {
      form.set("recipe_id", recipeToEdit);
    }

    form.set("user_id", user.id);
    form.set("name", recipe);
    form.set("content", recipeContent);

    for (const key in recipe_ingredients) {
      form.set(key, recipe_ingredients[key]);
    }

    for (const key in recipe_steps) {
      form.set(key, recipe_steps[key]);
    }

    const submit_form = () => {
      if (isEditing) {
        dispatch(recipeActions.editRecipe(form));
        handleEditRecipe();
      } else {
        dispatch(recipeActions.addNewRecipe(form));
      }
    };

    submit_form();

    history.push("/recipes");
  };

  useEffect(() => {
    checkIngredientFields(ingredientFields, stepFields, recipe, recipeContent);
  }, [ingredientFields, stepFields]);

  return (
    <div className="recipe-form-container">
      <div className="recipe-form-holder">
        <div className="recipe-form">
          <h1 className="new-recipe-header">
            {isEditing ? "Edit Recipe" : "New Recipe"}
          </h1>
          <div className="recipe-name">
            <RecipeName recipe={recipe} setRecipe={setRecipe}></RecipeName>
          </div>
          <div className="recipe-content">
            <RecipeContent
              recipeContent={recipeContent}
              setRecipeContent={setRecipeContent}
            ></RecipeContent>
          </div>
          <div className="recipe-ingredients">
            <RecipeIngredient
              measurements={measurements}
              ingredients={ingredients}
              handleUpdateIngredient={handleUpdateIngredient}
              handleRecipeIngredientAdd={handleRecipeIngredientAdd}
              handleRecipeIngredientRemove={handleRecipeIngredientRemove}
              ingredientFields={ingredientFields}
            ></RecipeIngredient>
          </div>
          <div className="recipe-steps">
            <RecipeStep
              stepFields={stepFields}
              handleAdd={handleAdd}
              handleChange={handleChange}
              handleRemove={handleRemove}
            ></RecipeStep>
          </div>
          <div className="recipe-submit-button">
            <button
              className={isDisabled ? "disabled" : ""}
              onClick={handleSubmit}
            >
              Submit recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
