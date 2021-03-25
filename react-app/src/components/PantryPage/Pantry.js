import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Categories from "../PantryComponents/Categories";
import { MetroSpinner } from "react-spinners-kit";
import PantryForm from "../Forms/PantryForm/PantryForm";

import "./pantry.css";

const Pantry = ({ setIngredientToEditId, handleEditPantry }) => {
  const history = useHistory();
  const isLoading = useSelector((state) => state.pantries.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories.map((c) => c.id)
  );

  // const [ingredientToEditId, setIngredientToEditId] = useState(-1);

  const isPantry = true;
  // const [isEditing, setIsEditing] = useState(false);

  // const handleEditPantry = (e) => {
  //   setIsEditing(!isEditing);
  // };

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <MetroSpinner size={80} color="#23bf93" loading={isLoading} />
        </div>
      ) : (
        <>
          <div className="pantry-page-header-container">
            <div className="pantry-page-header">Pantry Stock</div>
          </div>
          <Categories
            setIngredientToEditId={setIngredientToEditId}
            handleEditPantry={handleEditPantry}
            isPantry={isPantry}
            categories={categoryIds}
          ></Categories>
          {/* <div className="add-to-pantry-button-container">
            <button
              className="add-pantry-item"
              type="button"
              onClick={() => history.push("/add-to-pantry")}
            >
              <i className="fas fa-plus"></i> Add to pantry
            </button>
          </div> */}
        </>
      )}
    </>
  );
};

export default Pantry;
