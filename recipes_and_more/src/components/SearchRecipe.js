import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { PageFrame } from './PageFrame';
import axios from 'axios';



export class SearchRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          RecipesByCategory: [],
          value: '', 
          };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          console.log('Your selected recipe is: ' + this.state.value);
          event.preventDefault();
          this.get_recipes_by_category()

        }
    
        get_recipes_by_category() {
            console.log('inside - get_recipes_by_category')
            console.log('value:' + this.state.value)
            axios.get('http://127.0.0.1:8000/recipe_search_by_category/' + this.state.value)
            .then(response => {
                console.log(response)
                this.setState({RecipesByCategory: [response.data]})
                console.log(this.state.RecipesByCategory)

            })
        }

        // componentDidMount() {
        //     console.log("inside - componentDidMount - get_recipes_by_category");
        //     // this.get_recipes_by_category()
        // }

    render() {

      const RecipesByCategory = this.state.RecipesByCategory.map(
        recipes_by_category => {
            return(
                
            <ListGroup.Item key={recipes_by_category.id}>
                <Card style={{ width: '25rem' }} className="text-center" >
                <Card.Img variant="top" src={recipes_by_category.recipe_url} />
                <Card.Body>
                    <Card.Title>{recipes_by_category.recipe_name}</Card.Title>
                    <Card.Text>
                        For more details:
                    </Card.Text>
                <a href={'http://127.0.0.1:8000/full_recipe_by_id/' + recipes_by_category.recipe_id}>Full Recipe</a>
                {/* <Button onClick={() => this.fullRecipe(recipes_by_category.recipe_id)} variant="primary">Full Recipe</Button>  */}
                </Card.Body>
                </Card>
            </ListGroup.Item>                
            )
        }   
    )

        return(
        <>
            <PageFrame /> 

            <form onSubmit={this.handleSubmit}>
                <label>
                    <h3 style={{ color: 'navy'}}>Search By Category:</h3>
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option value=""></option>
                      <option value="bread_and_dough">Bread and Dough</option>
                      <option value="cakes">Cakes</option>
                      <option value="cookies_and_biscuits">Cookies and Biscuits</option>
                      <option value="cupcakes_and_muffins">Cupcakes and Muffins</option>
                      <option value="desserts">DESSERTS</option>
                      <option value="pancakes_and_crepes">Pancakes and Crepes</option>
                      <option value="desserts_pies_and_tarts">Desserts Pies and Tarts</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>

            <Container>
                {RecipesByCategory}
            </Container>
            
        </>
        )
    }
}