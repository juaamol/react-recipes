import axios from "axios";
import { edamamAppId, edamamAppKey } from '../../secret/secret';

export const fetchRecipes = async (query) => {
    /* const returned = {
      data: {
        hits: [
          {
            recipe: {
              label: "",
              image: "http://...",
              source: "",
              healtLabels: [""],
              cautions: [""],
              ingredientLines: [""],
              calories: 0,
            },
          },
        ],
      },
    };*/
    const response = await axios.get("https://api.edamam.com/search", {
        params: {
            app_id: edamamAppId,
            app_key: edamamAppKey,
            q: query,
        },
    });

    const recipes = response.data.hits.map(obj => {
        const newObj = {
            ...obj.recipe,
            id: obj.recipe.uri.replace(/^[a-z/:.#]*_([a-zA-Z0-9]*)$/, '$1')
        };

        return newObj;
    });

    return recipes;
};

export const fetchRecipeById = async (id) => {

    let recipe = null;

    const response = await axios.get('https://api.edamam.com/search?'
        + `app_id=${edamamAppId}&app_key=${edamamAppKey}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`);

    if (response.data) {
        recipe = response.data[0];
    }

    return recipe;
};