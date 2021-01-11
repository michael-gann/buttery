import React from "react";
import { useSelector } from "react-redux";

import Categories from "../PantryComponents/Categories";
import { MetroSpinner } from "react-spinners-kit";

const Pantry = () => {
  const isLoading = useSelector((state) => state.categories.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories.map((c) => c.id)
  );

  return (
    <>
      <div>PANTRY</div>
      <MetroSpinner size={50} color="#3ce50f" loading={isLoading} />
      <Categories categories={categoryIds}></Categories>
    </>
  );
};

export default Pantry;
