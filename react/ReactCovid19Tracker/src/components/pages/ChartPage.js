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
     }
  }

  handleClick = () => {
    this.setState({modalShow: true});
  }  

  closeModal = () => {
    this.setState({modalShow: false});
  }  

  // gets data returned from the select state dropdown
  callbackFunction = (childData) => {
    console.log("callbackFunction data: ", childData);     
    // set the "state" 
    this.setState({
      id: childData.id
     });
   }

  render() {
    console.log("modalShow", this.state.modalShow);

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
              <StoppedEvictionsChart /><br />
              <div className="text-center">
                <Button className="center" variant="secondary" onClick={() => this.handleClick()}>
                detailed state eviction data
                </Button>
              </div>
              <EvictionModal show={this.state.modalShow} parentCallback={this.callbackFunction} onHide={() => this.closeModal()} />

            </Col>                     
          </Row>
          <br />
        </Container>

      </div>
    )
  }
}
