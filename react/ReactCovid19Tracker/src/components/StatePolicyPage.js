import React, { Component } from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateSearch from './search/StateSearch';
import Footer from './Footer';


export default class StatePolicyPage extends Component {
  render() {
    return (
      <div>
        <Navigation 
          isLoggedIn={this.props.loggedInStatus} 
          user={this.props.user}
          handleLogoutClick={this.props.handleLogoutClick} 
          handleLogout={this.props.handleLogout} 
        />
        <Container>
        <StateSearch />
          <Row>     
            <Col></Col>                 
          </Row>
        </Container>
        {/* <Footer /> */}
      </div>
    )
  }
}
