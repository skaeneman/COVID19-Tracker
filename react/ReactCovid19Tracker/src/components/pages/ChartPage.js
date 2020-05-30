import React, { Component } from 'react';
import { useState } from 'react';
import StoppedEvictionsChart from '../charts/StoppedEvictionsChart';
import FaceMaskChart from '../charts/FaceMaskChart';
import EvictionModal from '../charts/EvictionModal';
import FaceMaskModal from '../charts/FaceMaskModal';
import { Modal, Container, Row, Col, Button} from 'react-bootstrap';

export default class ChartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      evictionModalShow: false,
      stillEvicting: [],
      stoppedEvicting: [],
     }
  }

  openEvictionModal = () => {
    this.setState({evictionModalShow: true});
  }  

  closeEvictionModal = () => {
    this.setState({evictionModalShow: false});
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
              <FaceMaskChart />
              <div className="text-center">
              <Button className="center" variant="secondary" onClick={() => this.openEvictionModal()}>
                fask mask details
                </Button>
              </div>
              <FaceMaskModal 
                show={this.state.evictionModalShow} 
                evicting={this.state.stillEvicting}
                stopped={this.state.stoppedEvicting}
                onHide={() => this.closeEvictionModal()} 
              />              
            </Col>
            <Col as={Col} sm="6" >
              <StoppedEvictionsChart chartPageCallback={this.callbackFunction} /><br />
              <div className="text-center">
                <Button className="center" variant="secondary" onClick={() => this.openEvictionModal()}>
                  eviction details
                </Button>
              </div>
              <EvictionModal 
                show={this.state.evictionModalShow} 
                evicting={this.state.stillEvicting}
                stopped={this.state.stoppedEvicting}
                onHide={() => this.closeEvictionModal()} 
              />
            </Col>                     
          </Row>
          <br />
        </Container>

      </div>
    )
  }
}
