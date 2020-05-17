import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/NavLink';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';


export default class Navigation extends Component {
  render() {
    console.log("nav props...", this.props);


    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">COVID-19 Legislation Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          { this.props.isLoggedIn === "NOT_LOGGED_IN" ?
            <Nav> 
              <Nav.Link href="/login">Login</Nav.Link> 
              <Nav.Link eventKey={2} href="/signup">Sign Up </Nav.Link> 
            </Nav> 
          : 
            <Nav> 
              <Nav.Link onClick={() => this.props.handleLogoutClick()}>Logout</Nav.Link>
            </Nav> 
          }               
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

