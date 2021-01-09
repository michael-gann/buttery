import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import RecipeName from "./RecipeFormComponents/RecipeName";
import RecipeContent from "./RecipeFormComponents/RecipeContent";
import RecipeStep from "./RecipeFormComponents/RecipeStep";
import RecipeIngredient from "./RecipeFormComponents/RecipeIngredient";

const RecipeForm = ({ user }) => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const measurements = useSelector((state) => state.measurements.measurements);
  const [recipe, setRecipe] = useState("");
  const [recipeContent, setRecipeContent] = useState("");
  const [displayContent, setDisplayContent] = useState(false);
  const [recipeStep, setRecipeStep] = useState("");
  const [stepFields, setStepFields] = useState([]);
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
        console.log("VAL ------", val, "InputVal ---------", inputVal);
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

  const handleSubmit = () => {
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

    form.set("user_id", user.id);
    form.set("name", recipe);
    form.set("content", recipeContent);

    for (const key in recipe_ingredients) {
      form.set(key, recipe_ingredients[key]);
    }

    for (const key in recipe_steps) {
      form.set(key, recipe_steps[key]);
    }

    const submit_form = async () => {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: form,
      });

      const resData = await res.json();
      console.log(resData);
    };
    submit_form();
  };

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
        <RecipeIngredient
          recipeIngredient={recipeIngredient}
          setRecipeIngredient={setRecipeIngredient}
          measurements={measurements}
          ingredients={ingredients}
          handleRecipeIngredientChange={handleRecipeIngredientChange}
          handleRecipeIngredientAdd={handleRecipeIngredientAdd}
          handleRecipeIngredientRemove={handleRecipeIngredientRemove}
          ingredientFields={ingredientFields}
        ></RecipeIngredient>
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default RecipeForm;
