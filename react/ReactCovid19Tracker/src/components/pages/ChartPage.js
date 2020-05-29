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
              <p className="text-white text-center">detailed state eviction data</p>        

              <Button variant="primary" onClick={() => this.handleClick()}>
                Launch modal with grid
              </Button>

              <EvictionModal show={this.state.modalShow} onHide={() => this.closeModal()} />

            </Col>                     
          </Row>
          <br />
        </Container>

      </div>
    )
  }
}
