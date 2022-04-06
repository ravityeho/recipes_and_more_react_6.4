import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'


import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export class RecipeReviews extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
        }
    }


    reviewById() {
        console.log('RecipeReviews - import reviewById')
        axios.get('http://127.0.0.1:8000/recipes_list/' + this.props.recipe_id + '/recipe_reviews')
        .then(response => {
            console.log(response)
            this.setState({reviews: response.data})
        })
    }


    componentDidMount() {
        console.log("RecipeReviews - componentDidMount for reviewById");
        this.reviewById()
    }


    render() { 
        
        const reviews = this.state.reviews.map(
            reviews_by_id => {
                return(
                <ListGroup.Item key={reviews_by_id.id}>
                    <Card style={{ width: '25rem' }} className="text-center" >
                    <Card.Body>
                        <Card.Title>{reviews_by_id.review_title}</Card.Title>
                        <Card.Text>
                            review_content : <br></br>
                            {reviews_by_id.review_content}<br></br>
                            review_date:<br></br>
                            {reviews_by_id.review_date}<br></br>
                            review_grade: <br></br>
                            {reviews_by_id.review_grade}<br></br>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </ListGroup.Item>                
                )
            }   
        )

        return(
            <>
                <Container>
                    {reviews}
                </Container>
            </>
        )
    }
}

export const WrappedFullRecipe = props => {
    const {recipe_id} = useParams()
    console.log(recipe_id)
    return <RecipeReviews recipe_id={recipe_id} {...props}/>
}
