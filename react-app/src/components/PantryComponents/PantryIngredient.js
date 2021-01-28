import React, { useState, useEffect } from "react";

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

const PantryIngredients = ({ ingredient }) => {
  const [isQFloat, setIsQFloat] = useState(false);

  useEffect(() => {
    setIsQFloat(isFloat(ingredient.quantity));
  }, [ingredient.quantity]);

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
