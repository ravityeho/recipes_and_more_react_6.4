import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'


import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Form, Modal, Button, ListGroup } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal'
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalFooter from 'react-bootstrap/ModalFooter'

import { useParams } from 'react-router-dom';
import { FullRecipe } from './FullRecipe';

export class NewReview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            review_title: '',
            review_content: '',
            review_grade: 0,
            user_id: 1,
            // show: true,
        }

        this.handleAddNew = this.handleAddNew.bind(this)
        // this.onLoginClose = this.closeModal.bind(this)
    }


    handleAddNew() {
        console.log('NewReview - handleAddNew')
        axios.post(
            'http://127.0.0.1:8000/recipes_list/' + this.props.recipe_id + '/recipe_reviews',
            {
                review_title: this.state.review_title, 
                review_content: this.state.review_content,
                review_grade: this.state.review_grade,
                recipe_id: this.props.recipe_id,
                user_id: this.state.user_id
               
            }
        )
        .then(response => {
            console.log(response)
            this.props.onHide()
        })
        
    }

    // closeModal() {
    //     this.setState({ show: false });
    // }

    render() { 

        return(

            <Modal show={this.props.show} onHide={this.props.onHide}>
                
                <Modal.Header closeButton>  
                <Modal.Title>New Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                         <Form.Group className="mb-3">
                             <Form.Label>Review Title</Form.Label>
                             <Form.Text>
                                 <Form.Control
                                 type="text" 
                                 placeholder="Enter Review Title"
                                 value={this.state.review_title}
                                 onChange = {(event) => this.setState({review_title: event.target.value})} />
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Review Content</Form.Label>
                            <Form.Text>
                                <Form.Control
                                 type="text" 
                                 placeholder="Enter Review Content"
                                 value={this.state.review_content}
                                 onChange = {(event) => this.setState({review_content: event.target.value})} />
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Rate from 1 to 10</Form.Label>
                            <Form.Text>
                                <Form.Range
                                 type="range" 
                                 min={0}
                                 max={10}
                                 step={1}
                                 variant="outline-primary"
                                 value={this.state.review_grade}
                                 onChange = {(event) => this.setState({review_grade: event.target.value})} />
                            </Form.Text>
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={() => this.setState({show_login_form: false})}>Cancel</Button> */}
                    <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                    <Button variant="primary" onClick={this.handleAddNew}>Add</Button>
                </Modal.Footer>
                </Modal> 
        )
    }
}
        
        