import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [isQFloat, setIsQFloat] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = (e) => {
    setIsHovering(true);
  };

  const handleHoverOff = (e) => {
    setIsHovering(false);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIngredientToEditId(ingredient.id);
  // };

  useEffect(() => {
    setIsQFloat(isFloat(ingredient.quantity));
  }, [ingredient.quantity]);

  // console.log(setIngredientToEditId);

  return (
    <>
      <div
        className="inner-pantry-ingredient-container"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOff}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIngredientToEditId(ingredient.id);
          handleEditPantry();
          return history.push(`/pantry/${ingredient.id}`);
        }}
      >
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
          {isHovering ? (
            <button
              className="edit-pantry-item pantry-hovering"
              onClick={() => {
                setIngredientToEditId(ingredient.id);
                handleEditPantry();
              }}
            >
              <MdEdit></MdEdit> Edit
            </button>
          ) : (
            <button
              className="edit-pantry-item"
              onClick={() => {
                setIngredientToEditId(ingredient.id);
                handleEditPantry();
              }}
            >
              <MdEdit></MdEdit> Edit
            </button>
          )}
        </div>
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
