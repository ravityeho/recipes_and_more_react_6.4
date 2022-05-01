import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'

import { PageFrame } from "./PageFrame";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, ListGroup } from 'react-bootstrap';
import { FullRecipe } from './FullRecipe';

export class DrinksRecipes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            drinks_data: [],
        }
    }

    get_drinks_data() {
        console.log('MicroRecipes: function- get_drinks_data')
        axios.get('http://127.0.0.1:7000/drinks_recipes')
        .then(response => {
            console.log(response)
            this.setState({drinks_data: response.data})
        })
    }

    componentDidMount() {
        console.log("MicroRecipes: componentDidMount - get_drinks_data");
        this.get_drinks_data()
    }

    render() {
     
        const drinks_data = this.state.drinks_data.map(
            drinks => {
                
            return(
                    
                <ListGroup.Item  key={drinks.idDrink}>
                    
                    <Card style={{ width: '40rem' }} className="text-center" >

                        <Card.Header as="h3" className="text-center">{drinks.strDrink}</Card.Header>

                        <Card.Img variant="top" src={drinks.strDrinkThumb} />

                        <Card.Body>
                            <Card.Title>{drinks.strDrink}</Card.Title>
                            <span style={{ color: 'darkgrey' }}>{drinks.strCategory}</span>
                            
                            <Card.Text>
                                
                                <span className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {drinks.strIngredient1} {drinks.strMeasure1}<br></br>
                                    {drinks.strIngredient2} {drinks.strMeasure2}<br></br>
                                    {drinks.strIngredient3} {drinks.strMeasure3}<br></br>
                                    {drinks.strIngredient4} {drinks.strMeasure4}<br></br>
                                    {drinks.strIngredient5} {drinks.strMeasure5}<br></br>
                                    {drinks.strIngredient6} {drinks.strMeasure6}<br></br>
                                    {drinks.strIngredient7} {drinks.strMeasure7}
                                </li></span>
                                <span className="fw-bold">Recipe Steps:</span> 
                                <br></br>
                                <span className="text-center" style={{ color: 'dimgray' }}>
                                    {drinks.strInstructions}
                                </span>
                                
                            </Card.Text>
                        
                        </Card.Body>

                    </Card>
                
                </ListGroup.Item>
                                 
                )
            }   
        )
        
        return(
            <>
                <PageFrame />
                <Container 
                style={{ maxWidth: '100%',
                        paddingLeft: 100,
                        paddingRight: 500,
                        paddingTop: 30,
                        paddingBottom: 30,
                }}>
                        <Col md={{ span: 12, offset: 3 }}>
                        {drinks_data}
                        </Col>  
                </Container>
            </>
        )
    }
}