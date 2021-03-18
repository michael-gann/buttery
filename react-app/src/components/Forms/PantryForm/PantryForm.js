import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import PantryIngredient from "./PantryFormComponents/PantryIngredient";

import * as pantryActions from "../../../store/pantries";

import "./pantryform.css";

const PantryForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.sessionUser);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const measurements = useSelector((state) => state.measurements.measurements);

  const [isDisabled, setIsDisabled] = useState(true);
  // const [quantityError, setQuantityError] = useState("");
  // const [ingredientError, setIngredientError] = useState("");
  // const [measurementError, setMeasurementError] = useState("");
  const [ingredientFields, setIngredientFields] = useState([
    {
      qty: null,
      ingredient: { value: null, label: "" },
      ingredientInput: "",
      measurementInput: "",
      measurement: { value: null, label: "" },
    },
  ]);

  const handleUpdateIngredient = (idx, event, type, val, inputVal) => {
    let values = [...ingredientFields];
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

  const handleIngredientAdd = () => {
    const values = [...ingredientFields];
    values.push({
      qty: null,
      ingredient: { value: null, label: "" },
      ingredientInput: "",
      measurementInput: "",
      measurement: { value: null, label: "" },
    });
    setIngredientFields(values);
  };

  const handleIngredientRemove = (idx) => {
    const values = [...ingredientFields];
    values.splice(idx, 1);
    setIngredientFields(values);
  };

  const checkIngredientFields = (fields) => {
    // number of input values to check for each ingredient
    let valuesToPass = fields.length * 3;

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

    if (valuesPassing === valuesToPass) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handlePantryFormSubmit = (e) => {
    if (e.target.className === "disabled") {
      return;
    }

    let pantry_ingredients = {};

    ingredientFields.forEach((ingredient, i) => {
      // eslint-disable-next-line
      for (const key in ingredient) {
        pantry_ingredients[`pantry_ingredients-${i}-ingredient_id`] =
          ingredient.ingredient.value;
        pantry_ingredients[`pantry_ingredients-${i}-measurement_id`] =
          ingredient.measurement.value;
        pantry_ingredients[`pantry_ingredients-${i}-quantity`] = ingredient.qty;
        pantry_ingredients[`pantry_ingredients-${i}-user_id`] = user.id;
      }
    });

    const form = new FormData();

    // if (isEditing) {
    //   form.set("recipe_id", recipeToEdit);
    // }

    for (const key in pantry_ingredients) {
      form.set(key, pantry_ingredients[key]);
    }

    const submit_form = () => {
      dispatch(pantryActions.updateUserPantryItems(form));
      //   if (isEditing) {
      //     // dispatch(recipeActions.editRecipe(form));
      //     handleEditRecipe();
      //   } else {
      //   dispatch(recipeActions.addNewRecipe(form));
      //   }
    };

    submit_form();

    history.push("/pantry");
  };

  useEffect(() => {
    checkIngredientFields(ingredientFields);
  }, [ingredientFields]);

  return (
    <div className="pantry-form-container">
      <div className="pantry-form-holder">
        <div className="pantry-form">
          <div className="pantry-form-header">Add to pantry</div>

          <PantryIngredient
            // setQuantityError={setQuantityError}
            // quantityError={quantityError}
            // setIngredientError={setIngredientError}
            // setMeasurementError={setMeasurementError}
            measurements={measurements}
            ingredients={ingredients}
            handleIngredientAdd={handleIngredientAdd}
            handleUpdateIngredient={handleUpdateIngredient}
            handleIngredientRemove={handleIngredientRemove}
            ingredientFields={ingredientFields}
          />

          <div className="pantry-submit-button">
            <button
              className={
                isDisabled || ingredientFields.length < 1 ? "disabled" : null
              }
              onClick={handlePantryFormSubmit}
            >
              {ingredientFields.length === 1 || ingredientFields.length === 0
                ? "Submit ingredient"
                : "Submit ingredients"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryForm;
