import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Registration extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""  
      };

      // this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }    

    // // send form data to the Rails API backend via a POST
    // handleSubmit(event) {
    //   axios.post("http://localhost:3001/registrations", {
    //     user: {
    //       first_name: this.state.first_name,
    //       last_name: this.state.last_name,
    //       email: this.state.email,
    //       phone: this.state.phone,
    //       password: this.state.password,
    //       password_confirmation: this.state.password_confirmation
    //     }
    //   },
    //   { 
    //     // sets cookie in the client
    //     withCredentials: true 
    //   }).then(response => {
    //     // response returned back from Rails
    //      console.log("registration", response); 
    //      if (response.data.status === 'created') {
    //        this.props.handleSuccessfulAuth(response.data); 
    //      }
    //   }).catch(error => {
    //     console.log("registration error:", error);
    //   })
    //   event.preventDefault();
    // }

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
        <FormExample />
      );
    }

    // render() {
    //     return (
    //       <Form noValidate validated={this.validated} onSubmit={this.handleSubmit}>
    //         <Form.Row>
    //           <Form.Group as={Col} md="4" controlId="validationCustom01">
    //           <Form.Label>First name</Form.Label>
    //             <Form.Control
    //               type="first_name" 
    //               name="first_name" 
    //               placeholder="First name" 
    //               value={this.state.first_name} 
    //               onChange={this.handleChange}
    //               required 
    //             />
    //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //           </Form.Group>
    //           <Button type="submit">Submit form</Button>
    //         </Form.Row>
    //       </Form>


    //       // <div>     
    //       //     <form onSubmit={this.handleSubmit}>


    //       //       <input
    //       //         type="last_name" 
    //       //         name="last_name" 
    //       //         placeholder="Last name" 
    //       //         value={this.state.last_name} 
    //       //         onChange={this.handleChange}
    //       //         required 
    //       //       />                

    //       //       <input
    //       //         type="email" 
    //       //         name="email" 
    //       //         placeholder="Email" 
    //       //         value={this.state.email} 
    //       //         onChange={this.handleChange}
    //       //         required 
    //       //       />

    //       //       <input
    //       //         type="phone" 
    //       //         name="phone" 
    //       //         placeholder="Phone" 
    //       //         value={this.state.phone} 
    //       //         onChange={this.handleChange}                   
    //       //       />                

    //       //       <input
    //       //         type="password" 
    //       //         name="password" 
    //       //         placeholder="Password" 
    //       //         value={this.state.password} 
    //       //         onChange={this.handleChange}
    //       //         required 
    //       //       />

    //       //       <input
    //       //         type="password" 
    //       //         name="password_confirmation" 
    //       //         placeholder="Password confirmation" 
    //       //         value={this.state.password_confirmation} 
    //       //         onChange={this.handleChange}
    //       //         required 
    //       //       />              

    //       //       <button type="submit">register</button>                  
    //       //     </form>
    //       //   </div>
    //     )
    // }

  }
  

  function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      console.log("form", form);

      setValidated(true);
    };


  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="first_name" 
              name="first_name" 
              placeholder="First name" 
              value={value} 
              onChange={e => setValue(e.target.value)}
              required 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
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
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
  




