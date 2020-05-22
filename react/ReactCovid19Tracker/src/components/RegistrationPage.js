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
import '../style/main.scss';


export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  
  handleSuccessfulAuth(data) {
    console.log("Reg Page handleSuccessfulAuth...");
    this.props.handleLogin(data);
    console.log("data...", data);
    // this.props.data
    this.props.history.push("/");
  }
  
  render() {
    console.log("Reg Page props...", this.props);

    return (
      <div className="dark-background">
        <Navigation 
          isLoggedIn={this.props.loggedInStatus} 
          handleLogoutClick={this.props.handleLogoutClick} 
          handleLogout={this.props.handleLogout} 
          handleSuccessfulAuth={this.handleSuccessfulAuth}
        />
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

