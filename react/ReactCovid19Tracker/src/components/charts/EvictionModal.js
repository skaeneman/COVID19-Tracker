import React, { useState, useEffect } from 'react';
import { Modal,  Container, Row, Col, Button} from 'react-bootstrap';

export default function MydModalWithGrid(props) {
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
              <div>Stopped Evictions</div>
            </Col>
            <Col sm={12} md={6}>
              <div>Still Evicting</div>
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
