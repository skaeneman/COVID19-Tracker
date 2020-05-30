import React, { useState, useEffect } from 'react';
import { Modal,  Container, Row, Col, Button} from 'react-bootstrap';

export default function FaceMaskModal(props) {

  let maskNotRequiredArr = []
  let mandateUseForEveryoneArr = []
  let mandateUseForEmployeesArr = []
  let notMandatedForEmployeesArr = []

  // get the states that do not require face masks
  for (const state of props.notrequired) {
    maskNotRequiredArr.push(<li key={state}>{state}</li>)
  }

  // get the states that make everyone wear masks
  for (const state of props.everyone) {
    mandateUseForEveryoneArr.push(<li key={state}>{state}</li>)
  }  

  // get the states that make employee's of public businesses wear masks
  for (const state of props.employees) {
    mandateUseForEmployeesArr.push(<li key={state}>{state}</li>)
  } 

  // get the states that do not force employee's of public businesses to wear masks
  for (const state of props.noemployees) {
    notMandatedForEmployeesArr.push(<li key={state}>{state}</li>)
  }   

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          State Face Mask Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col sm={12} md={6}>
              <div>
                <b>Not Required in Public</b>             
                {maskNotRequiredArr}  
              </div><br />          
            </Col>
            <Col sm={12} md={6}>
              <div>
                <b>Must be Worn in Public</b>
                {mandateUseForEveryoneArr}
              </div><br />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={12} md={6}>
              <div>
                <b>Employee's of Public Businesses Must Wear</b>             
                {mandateUseForEmployeesArr}  
              </div><br />          
            </Col>
            <Col sm={12} md={6}>
              <div>
                <b>Employee's Do Not have to Wear</b>
                {notMandatedForEmployeesArr}
              </div><br />
            </Col>
          </Row>          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
