import React, { Component } from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateSearch from './search/StateSearch';
import Footer from './Footer';
import StatePolicyData from './StatePolicyData';


export default class StatePolicyPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      id: '',
      stateName: '',
      k12SchoolsClosed: '',
      shelterInPlaceStart: '',
      shelterInPlaceEnd: '',
      stateOfEmergency: '',
      updatedAt: '',
      createdAt: ''
    }    
  }

  // gets data returned from the select state dropdown
  callbackFunction = (childData) => {
    console.log("StatePolicy: ", childData);

    // set the "this.state" data for a US State
    this.setState({
      id: childData.id,
      stateName: childData.state_name,
      k12SchoolsClosed: childData.k_12_schools_closed,
      shelterInPlaceStart: childData.shelter_in_place_start,
      shelterInPlaceEnd: childData.shelter_in_place_end,
      stateOfEmergency: childData.state_of_emergency,
      updatedAt: childData.updated_at,
      createdAt: childData.created_at
    })
  }

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
         {/* pass the dropdown value from the StateSearch child back to this parent componenet  */}
          <StateSearch parentCallback={this.callbackFunction} /> 
          <StatePolicyData stateData={this.state} />
        </Container>
        {/* <Footer /> */}
      </div>
    )
  }
}
