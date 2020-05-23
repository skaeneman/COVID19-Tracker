import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

export default function StateFaceMaskData(props) {  
  return (
    <div>
        <Card className="text-center"
          bg="light"
          text='dark'    
        >
          <Card.Header>Face Mask Data</Card.Header>
          <Card.Body>
            <Card.Title>face Mask Data</Card.Title>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="2" className="text-left">Mandate Use For Everyone:</Col>
                <Col className="text-left">{ props.faceMaskData.mandateUseForEveryone }</Col>  
              </Row>               
              <Row>
                <Col xs="2" className="text-left">Public Facing Businesses:</Col>
                <Col className="text-left">{ props.faceMaskData.mandateUseForEmployeesOfPublicFacingBusinesses }</Col>  
              </Row>                          
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>       
    </div>
  )
}
