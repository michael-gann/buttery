// const fakePantryStorage = localStorage.getItem("fake-pantry");
// const [ingredientsToShopCopy, setIngredientsToShopCopy] = useState({});
// const [pantryIngredientsEstimate, setPantryIngredientsEstimate] = useState(
//   fakePantryStorage ? fakePantryStorage : []
// );
// const [ingredientsNeeded, setIngredientsNeeded] = useState([]);
// const [fakePantry, setFakePantry] = useState([]);

// array of ingredients for a recipe
// const recipeIngredients = Object.values(recipe)[0].ingredients;

// array of ingredients in pantry
// const pantryIngredients = useSelector((state) => state.pantries.pantries);

// map of ingredients in shopping list

// const recipesToShopFor = useSelector(
//     (state) => state.cookingLists.recipesToShop
//   );

// recipe Id's that are in my map
// const recipeIdsInMap = allRecipes.filter(
//   (r) => recipesToShopForMap[r] !== undefined
// );

//   const allRecipeObjects = useSelector((state) => state.recipes.recipes);

// array of all recipe ID's
// const allRecipes = useSelector((state) =>
// state.recipes.recipes.map((r) => Object.keys(r)[0])
// );

//   useEffect(() => {
//     // localStorage.setItem("fake-state", )
//     if (!fakePantryStorage) {
//       const pantryCopy = _.cloneDeep(pantryIngredients);
//       setPantryIngredientsEstimate(pantryCopy);
//       localStorage.setItem("fake-pantry", pantryCopy);
//     }
//     // const ingredientsShopCopy = _.cloneDeep(ingredientsToShop);
//     // setIngredientsToShopCopy(ingredientsShopCopy);

// const recipesToShopForMap = {};
//   for (const r of recipesToShopFor) {
//     if (!recipesToShopForMap[r.recipe_id]) {
//       recipesToShopForMap[r.recipe_id] = r;
//     }
//   }

//   const recipesMap = Object.assign({}, ...allRecipeObjects);

//   const recipeIdsInMap = allRecipes.filter(
//       (r) => recipesToShopForMap[r] !== undefined
//     );

//     if (recipesToShopFor.length !== 0) {
//       const recipeIngredientsShoppingFor = recipeIdsInMap.map(
//         (id) => recipesMap[id].ingredients
//       );

//       console.log("SHOPPING FOR", recipeIngredientsShoppingFor);

//       const shoppingListCopy = _.cloneDeep(shoppingList);

// console.log("pantry map fake", pantryIngredientsMap);
//  setFakePantry(pantryIngredientsMap);
// }
// });

// ADD TO SHOP
// setIngredientsNeeded(result);
// console.log("before using", ingredientsToShopCopy);
// console.log("before block");
// for (const i of pantryIngredientsEstimate) {
//   console.log(ingredientsToShopCopy[i.ingredient_id]);
//   if (
//     ingredientsToShopCopy[i.ingredient_id] !== undefined &&
//     i.quantity + ingredientsToShopCopy[i.ingredient_id].quantity > 0
//   ) {
//     // console.log(
//     //   i.quantity,
//     //   ingredientsToShopCopy[i.ingredient_id].quantity
//     // );
//     i.quantity += ingredientsToShopCopy[i.ingredient_id].quantity;
//   }
// }
// console.log("after block");

// REMOVE FROM SHOP
// setIngredientsNeeded(result);
// for (const i of pantryIngredientsEstimate) {
//   if (
//     ingredientsToShopCopy[i.ingredient_id] !== undefined &&
//     i.quantity - ingredientsToShopCopy[i.ingredient_id].quantity > 0
//   ) {
//     i.quantity -= ingredientsToShopCopy[i.ingredient_id].quantity;
//   }
// }

// const result = _.differenceWith(
//     recipeIngredients,
//     fakePantry,
//     (x, y) =>
//       x.ingredient_id === y.ingredient_id && x.quantity - y.quantity <= 0
//   );
