import React from "react";
import { useSelector } from "react-redux";

import Categories from "./Categories";
import { MetroSpinner } from "react-spinners-kit";

const HomePantry = () => {
  const isLoading = useSelector((state) => state.categories.loading);

  const categoryIds = useSelector((state) =>
    state.categories.categories
      ? state.categories.categories.map((c) => c.id)
      : []
  );

  return (
    <>
      <div>PANTRY</div>
      <MetroSpinner size={40} color="#3ce50f" loading={isLoading} />
      {categoryIds && <Categories categories={categoryIds}></Categories>}
    </>
  );
};

export default HomePantry;
