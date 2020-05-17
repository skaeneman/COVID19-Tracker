import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';
import Navigation from './Navigation';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateSearch from './search/StateSearch';
import Footer from './Footer';
import Home from './Home';


export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }
  
  render() {
    return (
      <div>
        <Navigation isLoggedIn={this.props.loggedInStatus} />
        <Container>
          <Row>
            <Col>
              <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

