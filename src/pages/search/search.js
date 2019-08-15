import React from 'react';
import RecipeCard from '../../components/recipe-cards/recipe-cards';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const search = (props) => (
    <React.Fragment>
        <Form inline className="justify-content-center mt-sm-2">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>

        <div>
            <RecipeCard></RecipeCard>
        </div>

        
    </React.Fragment>
);

export default search;