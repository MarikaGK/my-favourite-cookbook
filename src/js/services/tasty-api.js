// require('dotenv').config();
// console.log(process.env); // remove this after you've confirmed it is working
import axios from 'axios';

const RAPID_API_KEY = process.env.AUTH0_RAPID_API_KEY;
// TODO
// Add DOM element - input (to search food/ingredient)
// Add DOM element - maybe few buttons / list of tags / separate text input?
//    (to search by tags; etc. "under 30 minutes", "under 1 hour", "oven", "baked"...etc.)
// Add DOM element - 2 or 3 buttons (only one activated param numberOfShowedRecipes) to set number of rendering recipes on the site.
//    indexOfFirstRecipeFromFondedArray - this parameter will be using to pagination. When user go to page 2:
//    parameter indexOfFirstRecipeFromFondedArray will be the first recipe on next site.
// HAVE TO figure out how to merge the pagination with indexOfFirstRecipeFromFondedArray
export const getRecipesByFoodNameOrIngredientAndTags = async (
  nameOfFoodOrIngredient,
  tags = 'under 1 hour',
  numberOfShowedRecipes = 20,
  indexOfFirstRecipeFromFondedArray = 0
) => {
  //* prepare tags: replace white-space to "_"
  const preparedTags = tags.replace(/\s+/g, '_').toLowerCase();
  const optionsWithQParameter = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: `${indexOfFirstRecipeFromFondedArray}`,
      size: `${numberOfShowedRecipes}`,
      tags: `${preparedTags}`,
      q: `${nameOfFoodOrIngredient}`,
    },
    headers: {
      'X-RapidAPI-Key': `${RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const optionsNoQParameter = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: `${indexOfFirstRecipeFromFondedArray}`,
      size: `${numberOfShowedRecipes}`,
      tags: `${preparedTags}`,
    },
    headers: {
      'X-RapidAPI-Key': `${RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(
      nameOfFoodOrIngredient.trim()
        ? optionsWithQParameter
        : optionsNoQParameter
    );
    console.log(response.data); // console.log() to delete
    // TODO
    // Add render function here
  } catch (error) {
    console.error(error);
  }
};

// getRecipesByFoodNameOrIngredientAndTags('soup', 'under 30 minutes');
