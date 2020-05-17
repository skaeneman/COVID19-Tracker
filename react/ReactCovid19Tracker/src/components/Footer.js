import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="bottom">
          <Navbar.Brand href="#home">Footer Goes Here</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Navbar>        
      </div>
    )
  }
}
