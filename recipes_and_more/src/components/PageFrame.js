import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
// import axios from 'axios'

export class PageFrame extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
    
          first_name: "",
          last_name: "",
        }
      }


render() {
    return(
        <>
        <Navbar expand="lg" bg="light" variant="light" >
          <Navbar.Brand href="/">
            <img
            alt="logo"
            src={require('./logo2.jpg')}
            height="35"
            className="d-inline-block align-top"
          />{' '}
            Recipes & More
          </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/allrecipes">Dessert Recipes</Nav.Link>
              <Nav.Link href="/searchrecipe">Search Dessert</Nav.Link>
              <Nav.Link href="/drinks_recipes">Drinks Recipess</Nav.Link>
            </Nav>
        </Navbar>
      </>
    )
}
}
