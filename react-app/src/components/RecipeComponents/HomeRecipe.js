import React from "react";
import { useSelector, shallowEqual } from "react-redux";
// import { useHistory } from "react-router-dom";

import RecipeCard from "./RecipeCard";

const HomeRecipe = ({ isHomepage, setIsHomepage, handleClick }) => {
  // const history = useHistory();

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.users.sessionUser);
  // const [toShop, setToShop] = useState(false);

  const recipeIds = useSelector(
    (state) => state.recipes.recipes.map((r) => Object.keys(r)[0]),
    shallowEqual
  );

  // const handleClick = () => {
  //   return history.push(`/new-recipe`);
  // };

  // const addToShop = () => {
  //   const form = new FormData();

  //   // form.set("recipe_id", id);
  //   // form.set("user_id", user.id);

  //   dispatch(cookingListActions.addToShoppingList(form));
  //   setToShop(true);
  // };

  return (
    <>
      <div
        className={
          isHomepage
            ? `home-recipecard-container`
            : `recipe-page-recipecard-container`
        }
      >
        {recipeIds &&
          recipeIds.map((id) => {
            return (
              <div className="recipecard-main-containers" key={id}>
                <RecipeCard
                  // addToShop={addToShop}
                  isHomepage={isHomepage}
                  setIsHomepage={setIsHomepage}
                  id={id}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeRecipe;
