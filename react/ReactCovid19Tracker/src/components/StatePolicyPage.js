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

    // this.state = { 
    //   message: []
    // }

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

    // this.getData = this.getData.bind(this); 
  }

  // returns data from the state select dropdown
  // getData(stateVal) {
  //   console.log("val....", stateVal);
  //   console.log("state_name....", stateVal.state_name);
  //   console.log("state_of_emergency....", stateVal.state_of_emergency);
  // }

  // gets the state data passed to it from the dropdown in the child componenet
  // callbackFunction = (childData) => {
  //     this.setState({message: [childData]})
  // }

  callbackFunction = (childData) => {
    // set the "this.state" data for a US State

    console.log(childData);

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
        {/* <StateSearch parentCallback={this.getData} />  */}

         {/* pass the dropdown value from the StateSearch child back to this parent componenet  */}
          <StateSearch parentCallback={this.callbackFunction} /> 
          <Row>     
            <Col></Col>                 
          </Row>

          {/* <div className="col">
            {this.state.message.map(x => <div>{x.state_name}</div>)}
          </div> */}

          <div>
            {/* <Row>   
            { this.state.id }
            </Row> 
            <Row>   
            { this.state.stateName }
            </Row> 
            <Row>   
            { this.state.k12SchoolsClosed }
            </Row> 
            <Row>   
            { this.state.shelterInPlaceStart }
            </Row> 
            <Row>   
            { this.state.shelterInPlaceEnd }
            </Row> 
            <Row>   
            { this.state.stateOfEmergency }
            </Row> 
            <Row>   
            { this.state.updatedAt }
            </Row> 
            <Row>   
            { this.state.createdAt }
            </Row>    */}
          </div>

          <StatePolicyData stateData={this.state} />
        </Container>
        {/* <Footer /> */}
      </div>
    )
  }
}
