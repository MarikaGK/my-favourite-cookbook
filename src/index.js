// require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it is working

import { getRecipesByFoodNameOrIngredientAndTags } from './js/services/tasty-api';

getRecipesByFoodNameOrIngredientAndTags('soup', 'under 30 minutes');
