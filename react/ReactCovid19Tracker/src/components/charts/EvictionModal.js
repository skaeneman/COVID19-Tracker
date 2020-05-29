import React, { useState, useEffect } from 'react';
import { Modal,  Container, Row, Col, Button} from 'react-bootstrap';

export default function MydModalWithGrid(props) {

  let statesStoppedEvictingArr = []
  let statesStillEvictingArr = []

  // get the states that have stopped evictions
  for (const state of props.stopped) {
    statesStoppedEvictingArr.push(<li key={state}>{state}</li>)
  }

  // get the states that are still allowing evictions
  for (const state of props.evicting) {
    statesStillEvictingArr.push(<li key={state}>{state}</li>)
  }  

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          State Eviction Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col sm={12} md={6}>
              <div>
                <b>Stopped Evictions</b>             
                {statesStoppedEvictingArr}  
              </div><br />          
            </Col>
            <Col sm={12} md={6}>
              <div>
                <b>Allowing Evictions</b>
                {statesStillEvictingArr}
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
