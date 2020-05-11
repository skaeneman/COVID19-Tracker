import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    // deletes the session
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
    .then(response => {
      this.props.handleLogout(); // set state in react to logged out
    }).catch(error => {
      console.log("error logging out:", error);
    })
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-50 align-items-center align-content-center">
         <Jumbotron>
          <h1>Home Page</h1>
          <h1>Status: {this.props.loggedInStatus}</h1>    
          <Button className="btn btn-danger" onClick={() => this.handleLogoutClick()}>logout</Button>
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <h1>Login</h1>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </Jumbotron>
      </div>
    )
  }
}

