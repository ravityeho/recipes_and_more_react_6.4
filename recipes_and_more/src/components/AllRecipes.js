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


export class AllRecipes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            all_recipes: [],
            recipeId: '',
        }
        this.handleClick= this.handleClick.bind(this)
    }

    get_all_recipes() {
        console.log('AllRecipes: function- get_all_recipes')
        axios.get('http://127.0.0.1:8000/recipes_list')
        .then(response => {
            console.log(response)
            this.setState({all_recipes: response.data})
        })
    }

    componentDidMount() {
        console.log("AllRecipes: componentDidMount - get_all_recipes");
        this.get_all_recipes()
    }

    handleClick(recipeId) {
        window.location.href = '/fullrecipe/'+recipeId
    } 

    render() {
      
        const all_recipes = this.state.all_recipes.map(
            recipe => {
                return(
                    
                <ListGroup.Item  key={recipe.id}>
                    
                    <Card style={{ width: '40rem' }} className="text-center" >

                        <Card.Header as="h3" className="text-center">{recipe.recipe_name}</Card.Header>
                        
                        <Card.Img variant="top" src={recipe.pic_url} />
                        
                        <Card.Body>

                            {/* <Card.Title>{recipe.recipe_name}</Card.Title> */}
                            <Card.Subtitle >
                                <span className="lh-lg" style={{ color: 'cadetblue' }}>
                                Difficulty Level: {''}{recipe.difficulty_level}<br></br>
                                Preparation Time: {''}{recipe.preparation_time} min<br></br>
                                Total Time: {''}{recipe.total_time} min<br></br>
                                </span>
                            </Card.Subtitle>
                            <Card.Text>
                                <span className="text-center" style={{ color: 'dimgray', backgroundColor: "linen", }}>
                                    {recipe.recipe_description}</span>
                            </Card.Text> 
                            <div>
                            <Button onClick={() => this.handleClick(recipe.id)} variant="outline-secondary">Full Recipe</Button>
                            </div>
                            
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
                        {all_recipes}
                        </Col>  
                </Container>
            </>
        )
    }
}

// width: "100%", maxWidth: '100%'
//                                     paddingLeft: 100,
//                                     paddingRight: 200,
//                                     paddingTop: 30,
//                                     paddingBottom: 30,