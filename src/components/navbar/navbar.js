import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from '../../pages/search/search';
import Home from '../../pages/home/home';
import Logo from '../../assets/salad-bowl-3.png';

const navbar = (props) => (
    <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><img
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
        <Route path="/" exact component={Home} />
        <Route path="/search/" component={Search} />
    </Router>
);

export default navbar;