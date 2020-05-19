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
      message: []
    }

    this.getData = this.getData.bind(this); 
  }

  // returns data from the state select dropdown
  getData(stateVal) {
    console.log("val....", stateVal);
    console.log("state_name....", stateVal.state_name);
    console.log("state_of_emergency....", stateVal.state_of_emergency);
  }

  // state = { 
  //   message: []
  // }
  callbackFunction = (childData) => {
      this.setState({message: childData})
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
          <StateSearch parentCallback={this.callbackFunction} /> 
          <Row>     
            <Col></Col>                 
          </Row>

          {/* <p> {this.state.message} </p> */}

          <div className="col">
            {this.state.message.map(x => <div>{x.state_name}</div>)}
          </div>

          {/* <StatePolicyData test={this.state.message} /> */}
        </Container>
        {/* <Footer /> */}
      </div>
    )
  }
}
