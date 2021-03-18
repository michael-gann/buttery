import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

const isFloat = (n) => {
  if (typeof n == "number" && !isNaN(n)) {
    if (Number.isInteger(n)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const PantryIngredients = ({
  ingredient,
  setIngredientToEditId,
  handleEditPantry,
}) => {
  const [isQFloat, setIsQFloat] = useState(false);

  useEffect(() => {
    setIsQFloat(isFloat(ingredient.quantity));
  }, [ingredient.quantity]);

  console.log(setIngredientToEditId);

  return (
    <>
      <div className="pantry-ingredient-quantity">
        {isQFloat ? ingredient.quantity.toFixed(2) : ingredient.quantity}
      </div>
      <div className="pantry-ingredient-measurement">
        {ingredient.measurement.name}
      </div>
      <div className="pantry-ingredient-ingredient">
        {ingredient.ingredient.name}
      </div>
      <div className="edit-pantry-item-container">
        <button
          className="edit-pantry-item"
          onClick={() => {
            setIngredientToEditId(ingredient.id);
            handleEditPantry();
          }}
        >
          <MdEdit></MdEdit> Edit
        </button>
      </div>
    </>
  );
};

export default PantryIngredients;

// import React from "react";

// const PantryIngredients = ({ ingredient }) => {
//   return (
//     <>
//       <div className="pantry-ingredient-quantity">{ingredient.quantity}</div>
//       <div className="pantry-ingredient-measurement">
//         {ingredient.measurement.name}
//       </div>
//       <div className="pantry-ingredient-ingredient">
//         {ingredient.ingredient.name}Z
//       </div>
//     </>
//   );
// };

// export default PantryIngredients;
