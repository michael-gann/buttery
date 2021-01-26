import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Categories from "../PantryComponents/Categories";
import { MetroSpinner } from "react-spinners-kit";

import "./pantry.css";

const Pantry = () => {
  const history = useHistory();
  const isLoading = useSelector((state) => state.pantries.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories.map((c) => c.id)
  );
  const isPantry = true;
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
          <Categories isPantry={isPantry} categories={categoryIds}></Categories>
          <div className="add-to-pantry-button-container">
            <button
              className="add-pantry-item"
              type="button"
              onClick={() => history.push("/add-to-pantry")}
            >
              <i className="fas fa-plus"></i> Add to pantry
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Pantry;
