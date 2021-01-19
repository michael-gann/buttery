import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Categories from "../PantryComponents/Categories";
import { MetroSpinner } from "react-spinners-kit";
import { ImPlus } from "react-icons/im";

import "./pantry.css";

const Pantry = () => {
  const history = useHistory();
  const isLoading = useSelector((state) => state.categories.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories.map((c) => c.id)
  );
  const isPantry = true;
  return (
    <>
      <div className="pantry-page-header-container">
        <div className="pantry-page-header">PANTRY</div>
        <button
          className="add-pantry-item"
          type="button"
          onClick={() => history.push("/add-to-pantry")}
        >
          <ImPlus />
        </button>
      </div>
      <MetroSpinner size={50} color="#3ce50f" loading={isLoading} />

      <Categories isPantry={isPantry} categories={categoryIds}></Categories>
    </>
  );
};

export default Pantry;
