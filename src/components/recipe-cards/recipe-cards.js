import React from "react";
import { withRouter } from 'react-router-dom';
import "./recipe-cards.css";
import RecipeCard from "./recipe-card/recipe-card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const recipeCards = props => {

  const recipeSelectHandler = (id) => {
    props.history.push({pathname: '/' + id})
  }

  const recipeCards = props.recipes.map(recipe => (
    <Col
      key={recipe.id}
      className="mt-5 col-content-center">
      <RecipeCard
        imgSrc={recipe.image}
        label={recipe.label}
        source={recipe.source}
        calories={recipe.calories}
        ingredientsLength={props.recipes.length}
        click={() => recipeSelectHandler(recipe.id)}
      />
    </Col>
  ));
  return (
    <Container>
      <Row>{recipeCards}</Row>
    </Container>
  );
};

export default withRouter(recipeCards);
