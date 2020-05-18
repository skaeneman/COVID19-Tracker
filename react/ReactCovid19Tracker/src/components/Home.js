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

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    console.log('home props ', this.props);
    console.log('home props user ', this.props.user);


    return (
      <div>
         {/* create the isLoggedIn prop and pass it to the Navigation componenet */}
        <Navigation 
          isLoggedIn={this.props.loggedInStatus} 
          user={this.props.user}
          handleLogoutClick={this.props.handleLogoutClick} 
          handleLogout={this.props.handleLogout} 
        />
        <Container>
        <StateSearch />
          <Row>
            <Col>
              <h1>Home Page</h1>
              <h1>Status: {this.props.loggedInStatus}</h1>    
              {/* <Button variant="danger" onClick={() => this.handleLogoutClick()}>logout</Button> */}
              {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

