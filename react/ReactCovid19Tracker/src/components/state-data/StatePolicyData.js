import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

export default function StatePolicyData(props) {  
  // console.log("props in StatePolicyData ", props.stateData);

  return (
    <div>
        <Card className="text-center" bg="light" text='dark'>
          <Card.Header className="bg-info text-white">State Info</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>
              <Row>
                <Col xs="2" className="text-left">id:</Col>
                <Col className="text-left">{ props.stateData.id }</Col>
              </Row> 
              <Row>
                <Col xs="2" className="text-left">state:</Col>
                <Col className="text-left">{ props.stateData.stateName }</Col>
              </Row>    
              <Row>
                <Col xs="2" className="text-left">K to 12 Schools Closed:</Col>
                <Col className="text-left">{ props.stateData.k12SchoolsClosed }</Col>
              </Row>  
              <Row>
                <Col xs="2" className="text-left">Shelter In Place Starts:</Col>
                <Col className="text-left">{ props.stateData.shelterInPlaceStart }</Col>
              </Row>  
              <Row>
                <Col xs="2" className="text-left">Shelter In Place End:</Col>
                <Col className="text-left">{ props.stateData.shelterInPlaceEnd }</Col>
              </Row>  
              <Row>
                <Col xs="2" className="text-left">State Of Emergency:</Col>
                <Col className="text-left">{ props.stateData.stateOfEmergency }</Col>
              </Row>                                                                                 
            </div>
            </Card.Text>
          </Card.Body>
        </Card>       
    </div>
  )
}

