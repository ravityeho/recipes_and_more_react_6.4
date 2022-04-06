import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'


import { PageFrame } from "./PageFrame";
import { RecipeReviews } from "./RecipeReviews";

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export class FullRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            full_recipe: [],
            reviewFlag: false
        }
    
        this.reviewById = this.reviewById.bind(this);
    }

    reviewById() {
        console.log("FullRecipe Show reviewById")
        this.setState({reviewFlag: true})
    }

    get_full_recipe() {
        console.log('FullRecipe - function get_full_recipe function')
        axios.get('http://127.0.0.1:8000/full_recipe_by_id/' + this.props.recipe_id)
        .then(response => {
            console.log(response)
            this.setState({full_recipe: [response.data]})
        })
    }

    componentDidMount() {
        console.log("FullRecipe - componentDidMount for get_full_recipe");
        this.get_full_recipe()
    }


    render() { 
        // return(<p>details of: {this.props.recipe_id}</p>)
        
        const full_recipe = this.state.full_recipe.map(
            recipe_by_id => {
                return(
                    
                <ListGroup.Item key={recipe_by_id.id}>
                    <Card style={{ width: '25rem' }} className="text-center" >
                    <Card.Img variant="top" src={recipe_by_id.pic_url} />
                    <Card.Body>
                        <Card.Title>{recipe_by_id.recipe_name}</Card.Title>
                        <Card.Text>
                            recipe_category : <br></br>
                            {recipe_by_id.recipe_category}<br></br>
                            total_preparation_time:<br></br>
                            {recipe_by_id.total_time}<br></br>
                            preparation_time: <br></br>
                            {recipe_by_id.preparation_time}<br></br>
                            receipt_cal_per_100gr: <br></br>
                            {recipe_by_id.receipt_cal_per_100gr}<br></br>
                            recipe_description: <br></br>
                            {recipe_by_id.recipe_description} <br></br>
                            recipe_content: <br></br>
                            {recipe_by_id.recipe_content}<br></br>
                        </Card.Text>
                    <Button onClick={() => this.reviewById()} variant="primary">Reviews</Button> 
                    {/* {this.state.reviewFlag && <RecipeReviews />}  */}
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
                    {full_recipe}
                    {this.state.reviewFlag && <RecipeReviews recipe_id={this.props.recipe_id}/>}
                </Container>
            </>
        )
    }
}

export const WrappedFullRecipe = props => {
    const {recipe_id} = useParams()
    console.log(recipe_id)
    return <FullRecipe recipe_id={recipe_id} {...props}/>
}
