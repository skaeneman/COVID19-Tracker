import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Home Page</h1>
              <h1>Status: {this.props.loggedInStatus}</h1>    
              <Button variant="danger" onClick={() => this.handleLogoutClick()}>logout</Button>
              <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Login</h1>
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

