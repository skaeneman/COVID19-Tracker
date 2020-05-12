import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class Registration extends Component {

    render() {
      return (
        <RegistrationForm />
      );
    }

  }
  

  function RegistrationForm() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    // handle the form submission by checking validations and calling the Rails API
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

      // only do a POST to the server once the form values are correct
      if (form.checkValidity()) {
        // send form data to the Rails API backend
        axios.post("http://localhost:3001/registrations", {
          user: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password,
            password_confirmation: passwordConfirmation
          }
        },
        { 
          // sets cookie in the client
          withCredentials: true 
        }).then(response => {
          // the response back from the Rails server
          console.log("registration", response); 
          if (response.data.status === 'created') {
            this.props.handleSuccessfulAuth(response.data); 
          }
        }).catch(error => {
          console.log("registration error:", error);
        })
        event.preventDefault();
      }
    };

    // form data
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="first_name" 
              name="first_name" 
              placeholder="First name" 
              value={firstName} 
              onChange={e => setFirstName(e.target.value)}               
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="last_name" 
              name="last_name" 
              placeholder="Last name" 
              value={lastName} 
              onChange={e => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control
                required 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email address.
              </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom03">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              // required
              type="phone" 
              name="phone" 
              placeholder="Phone" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom05">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control
              required
              type="password" 
              name="passwordConfirmation" 
              placeholder="Password confirmation" 
              value={passwordConfirmation} 
              onChange={e => setPasswordConfirmation(e.target.value)} 
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password confirmation.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>        

        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  




