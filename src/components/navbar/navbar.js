import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from '../../pages/search/search';
import Home from '../../pages/home/home';

const navbar = (props) => (
    <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/search/">Search</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/search/" component={Search} />
    </Router>
);

export default navbar;