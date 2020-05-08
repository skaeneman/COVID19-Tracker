import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        registrationErrors: ""          
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
        //  if (response.data.status === 'created') {
        //    this.props.handleSuccessfulAuth(response.data); 
        //  }
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
              <form onSubmit={this.handleSubmit}>           
                <input
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required 
                />
                <input
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={this.handleChange}
                  required 
                />        
                <button type="submit">login</button>                  
              </form>
            </div>
        )
    }
}
