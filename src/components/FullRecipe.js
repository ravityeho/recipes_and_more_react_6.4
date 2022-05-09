import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'


import { PageFrame } from "./PageFrame";
import { NewReview } from "./NewReview";
import { RecipeReviews } from "./RecipeReviews";

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Button, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import ScrollToBottom from 'react-scroll-to-bottom';

export class FullRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            full_recipe: [],
            reviewFlag: false,
            addReviewFlag: false,
            show_login_form: false
        }
    
        this.reviewById = this.reviewById.bind(this);
        this.addReviewById = this.addReviewById.bind(this);
    }

    reviewById() {
        console.log("FullRecipe Show reviewById", this.reviewFlag)
        this.setState({reviewFlag: true})
    }

    addReviewById() {
        console.log("FullRecipe Show addReviewById" , this.addReviewFlag)
        this.setState({addReviewFlag: true})
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
        
        const full_recipe = this.state.full_recipe.map(
            recipe_by_id => {
                return(
                    
                <ListGroup.Item key={recipe_by_id.id}>

                    <Card style={{ width: '40rem' }}  >

                        <Card.Header as="h3" className="text-center">{recipe_by_id.recipe_name}</Card.Header>

                        <Card.Img variant="top" src={recipe_by_id.pic_url} />

                        <Card.Body>
                            {/* <Card.Title>{recipe_by_id.recipe_name}</Card.Title> */}
                            <Card.Subtitle >
                                <span style={{ color: 'darkgrey' }}>{recipe_by_id.recipe_category}</span>
                                <br></br>

                                <span className="lh-lg" style={{ color: 'cadetblue' }}>
                                Total Preparation Time: {''}{recipe_by_id.total_time} min<br></br>
                                Preparation Time: {''}{recipe_by_id.preparation_time} min<br></br>
                                Calories: {''}{Math.round(recipe_by_id.receipt_cal_per_100gr)} cal per 100gr<br></br>
                                </span>
                                <br></br>

                            </Card.Subtitle>
                            <Card.Text>
                                <div className="text-center" style={{ color: 'dimgray', backgroundColor: "linen", }}>
                                    {recipe_by_id.recipe_description}
                                </div>

                                <br></br>
                                
                                {recipe_by_id.ingredient_name_amount_result.map(ingredients => 
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {ingredients.ingredient_name} {ingredients.amount} {ingredients.amount_type}
                                </li></ul>)}
                                
                                <br></br>

                                <span className="fw-bold">Recipe Steps:</span> 
                                <br></br>
                                <span className="lh-lg" style={{whiteSpace: "pre"}}>
                                    {recipe_by_id.recipe_content}
                                </span><br></br>
                                
                            </Card.Text>
                        <span>
                            <Button onClick={() => this.setState({reviewFlag: true})} variant="outline-secondary">View All Reviews</Button> 
                            {'  '}
                            {/* <Button onClick={() => this.setState({addReviewFlag: true})} variant="outline-secondary">Add New Review</Button>  */}
                            <Button onClick={() => this.setState({show_login_form: true})} variant="outline-secondary">Add New Review</Button>
                        </span>
                        </Card.Body>

                    </Card>

                </ListGroup.Item>                
                )
            }   
        )

        return(
            <>
                <PageFrame />
               
                <Container style={{ maxWidth: '100%', 
                        width: "100%",
                        paddingLeft: 100,
                        paddingRight: 200,
                        paddingTop: 30,
                        paddingBottom: 30,}}> 
                    <Col md={{ span: 8, offset: 3 }}>
                    {full_recipe}
                    {this.state.reviewFlag && <RecipeReviews recipe_id={this.props.recipe_id} />}
                    {/* {this.state.addReviewFlag && <NewReview recipe_id={this.props.recipe_id}/>} */}
                    <NewReview recipe_id={this.props.recipe_id} show={this.state.show_login_form} onHide={() => this.setState({show_login_form: false})}/>
                    {/* {this.state.show_login_form && <NewReview recipe_id={this.props.recipe_id} show={this.state.show_login_form}/>} */}
                    </Col>
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
