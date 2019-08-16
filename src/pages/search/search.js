import React, { useState, useEffect } from "react";
import axios from "axios";
import { edamamAppId, edamamAppKey } from '../../secret/secret'
import RecipeCards from "../../components/recipe-cards/recipe-cards";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const fetchRecipes = async () => {
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
      q: "chicken",
      excluded: 'olive oil',
    },
  });

  const recipes = response.data.hits.map(obj => obj.recipe);
  return recipes;
};

const Search = props => {
  const [state, setState] = useState({ recipes: [] });

  useEffect(() => {
    async function fetchData() {
      const recipes = await fetchRecipes();
      setState({ recipes: recipes });
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Form inline className="justify-content-center mt-sm-2">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>

      <div>
        <RecipeCards recipes={state.recipes} />
      </div>
    </React.Fragment>
  );
};

export default Search;
