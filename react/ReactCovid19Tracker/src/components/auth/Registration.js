import React, { Component } from 'react';
import axios from 'axios';

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

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }    

    // send form data to the Rails API backend via a POST
    handleSubmit(event) {
      axios.post("http://localhost:3001/registrations", {
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          phone: this.state.phone,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
      },
      { 
        // sets cookie in the client
        withCredentials: true 
      }).then(response => {
        // response returned back from Rails
         console.log("registration", response); 
         if (response.data.status === 'created') {
           this.props.handleSuccessfulAuth(response.data); 
         }
      }).catch(error => {
        console.log("registration error:", error);
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
              <form onSubmit={this.handleSubmit}>
                <input
                  type="first_name" 
                  name="first_name" 
                  placeholder="First name" 
                  value={this.state.first_name} 
                  onChange={this.handleChange}
                  required 
                />

                <input
                  type="last_name" 
                  name="last_name" 
                  placeholder="Last name" 
                  value={this.state.last_name} 
                  onChange={this.handleChange}
                  required 
                />                

                <input
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required 
                />

                <input
                  type="phone" 
                  name="phone" 
                  placeholder="Phone" 
                  value={this.state.phone} 
                  onChange={this.handleChange}                   
                />                

                <input
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={this.handleChange}
                  required 
                />

                <input
                  type="password" 
                  name="password_confirmation" 
                  placeholder="Password confirmation" 
                  value={this.state.password_confirmation} 
                  onChange={this.handleChange}
                  required 
                />              

                <button type="submit">register</button>                  
              </form>
            </div>
        )
    }
}
