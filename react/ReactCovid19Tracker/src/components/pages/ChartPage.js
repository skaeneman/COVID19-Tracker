import React, { Component } from 'react';
import { useState } from 'react';
import StoppedEvictionsChart from '../charts/StoppedEvictionsChart';
import EvictionModal from '../charts/EvictionModal';
import { Modal, Container, Row, Col, Button} from 'react-bootstrap';

export default class ChartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      stillEvicting: [],
      stoppedEvicting: [],
     }
  }

  handleClick = () => {
    this.setState({modalShow: true});
  }  

  closeModal = () => {
    this.setState({modalShow: false});
  }  

  // gets data passed in from the StoppedEvictionsChart.js Rails API response
  callbackFunction = (childData) => {
    // console.log("callbackFunction in ChartPage.js: ", childData);     
    // set the "state" 
    this.setState({
      stillEvicting: childData.no_eviction_policy,
      stoppedEvicting: childData.eviction_policy
     });
   }

  render() {
    // console.log("modalShow", this.state.modalShow);
    return (
      <div>        
        {/* <Doughnut data={...} /> */}
        <Container fluid>
          <br />
          <Row>
            <Col as={Col} sm="6" >
              {/* <StoppedEvictionsChart /> */}
            </Col>
            <Col as={Col} sm="6" >
              <StoppedEvictionsChart chartPageCallback={this.callbackFunction} /><br />
              <div className="text-center">
                <Button className="center" variant="secondary" onClick={() => this.handleClick()}>
                detailed state eviction data
                </Button>
              </div>
              <EvictionModal 
                show={this.state.modalShow} 
                evicting={this.state.stillEvicting}
                stopped={this.state.stoppedEvicting}
                onHide={() => this.closeModal()} 
              />
            </Col>                     
          </Row>
          <br />
        </Container>

      </div>
    )
  }
}
