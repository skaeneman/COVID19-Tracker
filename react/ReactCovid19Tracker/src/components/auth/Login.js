import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Col, Button, Form, Alert } from 'react-bootstrap';
import '../../style/main.scss';

export default class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        loginErrors: "",
        errorMsg: "",   
        alertVisible: false,       
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
         if (response.data.logged_in === true) {       
           console.log("logged in:", response);   
           this.props.handleSuccessfulAuth(response.data); 
         }
         else {     
          // display error message in the view
          this.setState({errorMsg: response.data.message, alertVisible: true});  
          console.log("login error.....", response.data);   
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
          <div>   
            <div>      
              <br />   
              <Alert variant="primary" 
                show={this.state.alertVisible} 
                onClose={() => this.setState({alertVisible: false})} 
                dismissible>{this.state.errorMsg}
              </Alert>
            </div>
            
            <div className="jumbotron-padding">
                <Jumbotron as={Col} md={{ span: 8, offset: 2 }} className="bg-dark text-light">
                  <h1 className="text-center">Login</h1>
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
                      <Form.Text className="text-white">
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
                    <Button variant="primary" type="submit" className="float-right btn btn-block-down">
                      Login
                    </Button>
                    <br />
                  </Form>
                </Jumbotron> 
            </div>
          </div>
        )
    }
}
