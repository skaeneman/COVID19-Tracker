import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StateFaceMaskData(props) {  
  return (
    <div>
        <Card className="text-left" bg="light" text='dark' >
          <Card.Header className="alert alert-dark">Face Mask Data</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="6" className="text-left">Mandate Use For Everyone:</Col>
                <Col className="text-left">{ props.faceMaskData.mandateUseForEveryone }</Col>  
              </Row>               
              <Row>
                <Col xs="6" className="text-left">Public Facing Businesses:</Col>
                <Col className="text-left">{ props.faceMaskData.mandateUseForEmployeesOfPublicFacingBusinesses }</Col>  
              </Row>                          
            </div>
            </Card.Text>
          </Card.Body>
        </Card>       
    </div>
  )
}
