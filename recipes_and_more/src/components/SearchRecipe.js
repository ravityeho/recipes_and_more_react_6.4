import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

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
                this.setState({RecipesByCategory: response.data})
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
                
            <ListGroup.Item key={recipes_by_category.recipe_id}>

                <Card style={{ width: '40rem' }} className="text-center" >
                <Card.Header as="h3" className="text-center">{recipes_by_category.recipe_name}</Card.Header>

                <Card.Img variant="top" src={recipes_by_category.recipe_url} />
                <Card.Body>
                <a href={'http://localhost:3000/fullrecipe/' + recipes_by_category.recipe_id} class="list-group-item list-group-item-action">Full Recipe</a>
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
                    <p className="fs-2" >Search By Category:</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <select className="custom-select custom-select-lg mb-3" value={this.state.value} onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="BREAD & DOUGH">Bread and Dough</option>
                                <option value="CAKES">Cakes</option>
                                <option value="COOKIES & BISCUITS">Cookies and Biscuits</option>
                                <option value="CUPCAKES & MUFFINS">Cupcakes and Muffins</option>
                                <option value="DESSERTS">Desserts</option>
                                <option value="PANCAKES & CREPES">Pancakes and Crepes</option>
                                <option value="DESSERTS, PIES & TARTS">Desserts Pies and Tarts</option>
                                </select>
                            </label>
                            {" "}
                            <input className="btn btn-light" type="submit" value="Submit" />
                        </form>
                        <br></br>
                        {RecipesByCategory}
                    </Col>  
            </Container>
            
            
        </>
        )
    }
}