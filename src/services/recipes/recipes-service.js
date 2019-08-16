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
  
    const recipes = response.data.hits.map(obj => obj.recipe);
    return recipes;
  };