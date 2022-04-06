import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'


import { PageFrame } from "./PageFrame";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
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
                    
                <ListGroup.Item key={recipe.id}>
                    <Card style={{ width: '25rem' }} className="text-center" >
                    <Card.Img variant="top" src={recipe.pic_url} />
                    <Card.Body>
                        <Card.Title>{recipe.recipe_name}</Card.Title>
                        <Card.Text>
                        Difficulty Level: {recipe.difficulty_level}
                        Preparation Time: {recipe.preparation_time} 
                        Total Time: {recipe.total_time}
                        {recipe.recipe_description} <br></br>
                        </Card.Text> 
                        <div>
                        <Button onClick={() => this.handleClick(recipe.id)} variant="primary">Full Recipe</Button>
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
                <Container>
                    {all_recipes}
                </Container>
            </>
        )
    }
}