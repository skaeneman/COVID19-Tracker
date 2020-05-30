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
      faceMaskModalShow: false,

      // evictions
      stillEvicting: [],
      stoppedEvicting: [],

      // face masks
      maskNotRequired: [],
      mandateUseForEveryone: [],
      mandateUseForEmployees: [],
      notMandatedForEmployees: [],      
     }
  }

  openEvictionModal = () => {
    this.setState({evictionModalShow: true});
  }  

  closeEvictionModal = () => {
    this.setState({evictionModalShow: false});
  }  

  openFaceMaskModal = () => {
    this.setState({faceMaskModalShow: true});
  }  

  closeFaceMaskModal = () => {
    this.setState({faceMaskModalShow: false});
  }    


  // gets data passed in from the StoppedEvictionsChart.js Rails API response
  evictionCallbackFunction = (childData) => {
    // set the "state" 
    this.setState({
      stillEvicting: childData.no_eviction_policy,
      stoppedEvicting: childData.eviction_policy
     });
   }

  // gets data passed in from the FaceMaskChart.js Rails API response
  faceMaskCallbackFunction = (childData) => {
    this.setState({
      maskNotRequired: childData.mask_not_required,
      mandateUseForEveryone: childData.mandate_use_for_everyone,
      mandateUseForEmployees: childData.mandate_use_for_employees,
      notMandatedForEmployees: childData.not_mandated_for_employees
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
              <FaceMaskChart chartPageFaceMaskCallback={this.faceMaskCallbackFunction}/>
              <div className="text-center">
              <Button className="center" variant="secondary" onClick={() => this.openFaceMaskModal()}>
                fask mask details
                </Button>
              </div>
              <FaceMaskModal 
                show={this.state.faceMaskModalShow} 
                notrequired={this.state.maskNotRequired}
                everyone={this.state.mandateUseForEveryone}
                employees={this.state.mandateUseForEmployees}
                noemployees={this.state.notMandatedForEmployees}
                onHide={() => this.closeFaceMaskModal()} 
              />              
            </Col>
            <Col as={Col} sm="6" >
              <StoppedEvictionsChart chartPageCallback={this.evictionCallbackFunction} /><br />
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
