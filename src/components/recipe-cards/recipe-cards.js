import React from "react";
import './recipe-cards.css'
import RecipeCard from "./recipe-card/recipe-card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const recipeCards = props => (
  <Container>
    <Row>
      <Col className="mt-5 col-content-center">
        <RecipeCard />
      </Col>
      <Col className="mt-5 col-content-center">
        <RecipeCard />
      </Col>
      <Col className="mt-5 col-content-center">
        <RecipeCard />
      </Col>
      <Col className="mt-5 col-content-center">
        <RecipeCard />
      </Col>
      <Col className="mt-5 col-content-center">
        <RecipeCard />
      </Col>
    </Row>
  </Container>
);

export default recipeCards;
