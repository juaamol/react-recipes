import React from "react";
import "./recipe-cards.css";
import RecipeCard from "./recipe-card/recipe-card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const recipeCards = props => {
  const recipeCards = props.recipes.map(recipe => (
    <Col className="mt-5 col-content-center">
      <RecipeCard
        imgSrc={recipe.image}
        label={recipe.label}
        source={recipe.source}
        calories={recipe.calories}
        ingredientsLength={props.recipes.length}
      />
    </Col>
  ));
  return (
    <Container>
      <Row>{recipeCards}</Row>
    </Container>
  );
};

export default recipeCards;
