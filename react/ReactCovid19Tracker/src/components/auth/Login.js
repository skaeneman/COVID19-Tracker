import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';

export default class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        loginErrors: ""          
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }    

    // send form data to the Rails API backend via a POST
    handleSubmit(event) {
      // const {email, password} = this.state;
      axios.post("http://localhost:3001/sessions", {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      },
      { 
        // sets cookie in the client
        withCredentials: true 
      }).then(response => {
        // response returned back from Rails
         console.log("login", response); 
         if (response.data.logged_in === true) {
           this.props.handleSuccessfulAuth(response.data); 
         }
      }).catch(error => {
        console.log("login error:", error);
      })
      event.preventDefault();
    }

    // triggered when a user types something in an input field
    handleChange(event) {
      const {name, value} = event.target;
      this.setState({
        // display the value that was typed in the input field
        [name]: value
      });
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-50 align-items-center align-content-center">
              <Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      value={this.state.email} 
                      onChange={this.handleChange}
                      required                   
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      value={this.state.password} 
                      onChange={this.handleChange}
                      required 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Jumbotron> 
            </div>
        )
    }
}
