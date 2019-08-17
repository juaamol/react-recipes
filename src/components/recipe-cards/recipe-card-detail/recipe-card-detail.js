import React, { useState, useEffect } from 'react';
import * as recipesService from '../../../services/recipes/recipes-service';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import './recipe-card-detail.css';

const TagBox = props => {
  return (
    <div className='w-100 min-height max-w-20'>
      <div className={props.bg + ' text-white font-weight-bold pl-2'}>
        {props.title}
      </div>
      <div>
        {props.labels.map(label => (
          <React.Fragment key={label}>
            <Badge variant='secondary'>{label}</Badge>{' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const RecipeCardDetail = props => {
  const [recipeState, setRecipeState] = useState({ recipe: null });

  useEffect(() => {
    async function fetchData() {
      const recipe = await recipesService.fetchRecipeById(
        props.match.params.id,
      );

      setRecipeState({ recipe });
    }
    fetchData();
  }, [props]);

  return (
    <div>
      {recipeState.recipe ? (
        <Container className='bg-black-7 pl-5 pr-5 mt-5 mb-5 pt-5 pb-5'>
          <Row className='justify-content-md-center'>
            <h2 className='text-center text-light'>{recipeState.recipe.label}</h2>
          </Row>
          <Row className='mt-4'>
            <Col>
              <Row className='justify-content-center'>
                <img src={recipeState.recipe.image} alt='tasty food' />
              </Row>
              <Row className='justify-content-center '>
                <ListGroup className='w-300px mah-500px scrolly-auto'>
                  {recipeState.recipe.ingredientLines.map(ing => (
                    <ListGroup.Item key={ing}>{ing}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Row>
              <Row className='justify-content-center mt-3'>
                <a
                  className='btn btn-primary w-300px'
                  href={recipeState.recipe.url}
                >
                  {recipeState.recipe.source}
                </a>
              </Row>
            </Col>
            <Col>
              <Row className='justify-content-center mt-sm-6'>
                <TagBox
                  bg='bg-success'
                  title='Diet labels'
                  labels={recipeState.recipe.dietLabels}
                />
              </Row>
              <Row className='justify-content-center'>
                <TagBox
                  bg='bg-primary'
                  title='Health labels'
                  labels={recipeState.recipe.healthLabels}
                />
              </Row>
              <Row className='justify-content-center'>
                <TagBox
                  bg='bg-warning'
                  title='Cautions'
                  labels={recipeState.recipe.cautions}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className='spinner-container'>
          <Spinner
            animation='border'
            variant='success'
            className='mx-auto my-auto spinner-size'
          />
        </div>
      )}
    </div>
  );
};

export default RecipeCardDetail;
