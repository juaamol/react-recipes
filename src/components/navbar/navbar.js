import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Search from '../../pages/search/search';
import RecipeCardDetail from '../recipe-cards/recipe-card-detail/recipe-card-detail';
import Home from '../../pages/home/home';
import Logo from '../../assets/salad-bowl-3.png';

const navbar = (props) => (
    <Router>
        <Navbar bg="dark sticky-top" expand="lg" variant="dark">
            <Navbar.Brand>
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Salad bowl logo"
                /></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search/" exact component={Search} />
            <Route path="/search/:id" exact component={RecipeCardDetail} />
        </Switch>
    </Router>
);

export default navbar;