import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Main</Navbar.Brand>
          <Navbar.Toggle />
          <Nav.Link href="/allrecipes">All Recipes</Nav.Link>
          <Nav.Link href="/searchrecipe">Search</Nav.Link>
          {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{this.state.first_name + ' ' + this.state.last_name}</a>
            </Navbar.Text>
          </Navbar.Collapse> */}
      </Navbar>
    )
}
}
