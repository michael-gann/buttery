import React from "react";

import { useState, useEffect } from "react";
import RecipeName from "./RecipeFormComponents/RecipeName";
import RecipeContent from "./RecipeFormComponents/RecipeContent";
import RecipeStep from "./RecipeFormComponents/RecipeStep";
import RecipeIngredient from "./RecipeFormComponents/RecipeIngredient";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState("");
  const [recipeContent, setRecipeContent] = useState("");
  const [displayContent, setDisplayContent] = useState(false);
  const [recipeStep, setRecipeStep] = useState("");
  const [stepFields, setStepFields] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [measurement, setMeasurement] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [recipeIngredient, setRecipeIngredient] = useState([]);
  const [ingredientFields, setIngredientFields] = useState([]);

  const handleChange = (i, event) => {
    const values = [...stepFields];
    values[i].value = event.target.value;
    setStepFields(values);
  };

  const handleRecipeIngredientChange = (idx, event, type, val, inputVal) => {
    const values = [...ingredientFields];
    switch (type.value) {
      case "quantity":
        values[idx] = { ...values[idx], qty: event.target.value };
        setIngredientFields(values);
        break;
      case "measurement":
        console.log(val, inputVal);
        val
          ? (values[idx] = {
              ...values[idx],
              measurement: val,
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
      qty: null,
      measurement: null,
      ingredient: null,
      measurementInput: "cup",
      ingredientInput: "buttter",
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

  const handleSubmit = () => {};

  const fetch_data = async () => {
    const resMeasure = await fetch("/api/measurements");
    const resMeasureData = await resMeasure.json();
    setMeasurements(resMeasureData);

    const resIngredients = await fetch("/api/ingredients/options");
    const resIngredientsData = await resIngredients.json();
    setIngredients(resIngredientsData);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  useEffect(() => {
    // add submit form function here
    // don't forget to add first recipeStep to fields state (shift?) when submitting steps
  });

  return (
    <>
      <div>
        <RecipeName recipe={recipe} setRecipe={setRecipe}></RecipeName>
      </div>
      <div>
        <button onClick={() => setDisplayContent(!displayContent)}>
          {displayContent ? "remove" : "add"}{" "}
        </button>
        <RecipeContent
          recipeContent={recipeContent}
          setRecipeContent={setRecipeContent}
          displayContent={displayContent}
        ></RecipeContent>
      </div>
      <div>
        <RecipeStep
          stepFields={stepFields}
          handleAdd={handleAdd}
          handleChange={handleChange}
          handleRemove={handleRemove}
          recipeStep={recipeStep}
          setRecipeStep={setRecipeStep}
        ></RecipeStep>
      </div>
      <div>
        <RecipeIngredient
          recipeIngredient={recipeIngredient}
          setRecipeIngredient={setRecipeIngredient}
          measurements={measurements}
          measurement={measurement}
          setMeasurement={setMeasurement}
          ingredients={ingredients}
          ingredient={ingredient}
          setIngredient={setIngredient}
          handleRecipeIngredientChange={handleRecipeIngredientChange}
          handleRecipeIngredientAdd={handleRecipeIngredientAdd}
          handleRecipeIngredientRemove={handleRecipeIngredientRemove}
          ingredientFields={ingredientFields}
        ></RecipeIngredient>
      </div>
      <div>
        <button onSubmit={handleSubmit}></button>
      </div>
    </>
  );
};

export default RecipeForm;
