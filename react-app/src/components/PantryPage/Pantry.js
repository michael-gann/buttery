import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Categories from "../PantryComponents/Categories";
import { MetroSpinner } from "react-spinners-kit";

const Pantry = () => {
  const history = useHistory();
  const isLoading = useSelector((state) => state.categories.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories.map((c) => c.id)
  );

  return (
    <>
      <div>PANTRY</div>
      <button type="button" onClick={() => history.push("/add-to-pantry")}>
        Add to Pantry
      </button>
      <MetroSpinner size={50} color="#3ce50f" loading={isLoading} />
      <Categories categories={categoryIds}></Categories>
    </>
  );
};

export default Pantry;
