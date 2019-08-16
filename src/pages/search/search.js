import React, { useState, useEffect } from "react";
import * as recipesService from '../../services/recipes/recipes-service';
import RecipeCards from "../../components/recipe-cards/recipe-cards";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import './search.css';

const Search = props => {
  const [recipesState, setRecipesState] = useState({ recipes: [], });
  const [loadState, setLoadState] = useState({ loading: false, loaded: true, error: '', });
  const [queryState, setQueryState] = useState({ query: '', });

  useEffect(() => {
    async function fetchData() {
      const query = queryState.query;

      if (loadState.loading) {

        try {
          const recipes = await recipesService.fetchRecipes(query);
          setRecipesState({ recipes: recipes });
          setLoadState({ loading: false, loaded: true, error: '' });

        } catch (err) {
          setLoadState({ loading: false, loaded: false, error: err });
        }
      }

      console.log('inside fetch data');
    }
    fetchData();
  }, [loadState.loading, queryState.query]);

  const handleQuery = (event) => {
    setQueryState({ query: event.target.value, });

    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  const handleSearchButton = async () => {
    setLoadState({ loading: true, loaded: true, error: '' });
  }

  return (
    <React.Fragment>
      <Form inline className="justify-content-center mt-sm-2">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={queryState.query}
          onChange={handleQuery}
          onKeyPress={handleQuery} />
        <Button variant="outline-success" onClick={handleSearchButton}>Search</Button>
      </Form>

      <div className="d-flex justify-content-center">
        {loadState.loading ?
          <div className="spinner-container">
            <Spinner animation="border" variant="success" className="mx-auto my-auto spinner-size" />
          </div> :
          <RecipeCards recipes={recipesState.recipes} />
        }
      </div>
    </React.Fragment>
  );
};

export default Search;
