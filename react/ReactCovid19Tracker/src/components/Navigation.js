import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/NavLink';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './Dashboard';


export default class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">COVID-19 Legislation Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <NavDropdown title="Analytics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/states">State Data</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Charts</NavDropdown.Item>
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
          <Nav className=""> 
            <NavDropdown title={this.props.user.first_name} id="collasible-nav-dropdown"><i className="fa fa-lock"></i>
              <NavDropdown.Item href="/states">User Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => this.props.handleLogoutClick()}>Logout</NavDropdown.Item>
            </NavDropdown>            
          </Nav> 
          }               
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

