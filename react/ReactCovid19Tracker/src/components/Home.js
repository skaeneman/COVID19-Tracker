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
import { fetchData } from '../api/';
import InfectedCard from './cards/InfectedCard';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: {}
    }
  }

  async componentDidMount() {
    // gets the COVID-19 data from an external API call
    const covidApiData = await fetchData();
    // console.log(covidApiData);
    this.setState({ apiData: covidApiData });
  }

  render() {
    const { apiData } = this.state;

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
          <Row>
            <Col>
              <InfectedCard data={apiData} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

