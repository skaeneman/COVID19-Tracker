import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StatePropertyData(props) {
  return (
    <div>
        <Card className="text-center"
          bg="light"
          text='dark'    
        >
          <Card.Header>Property Data</Card.Header>
          <Card.Body>
            <Card.Title>Property Data</Card.Title>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="2" className="text-left">stopped initiating evictions:</Col>
                <Col className="text-left">{ props.propertyData.stopInitiatingEvictions }</Col>  
              </Row>      
              <Row>
                <Col xs="2" className="text-left">stopped enforcing evictions:</Col>
                <Col className="text-left">{ props.propertyData.stopEnforcingEvictions }</Col>  
              </Row>    
              <Row>
                <Col xs="2" className="text-left">grace period or security deposit towards rent:</Col>
                <Col className="text-left">{ props.propertyData.gracePeriodOrSecurityDepositTowardsRent }</Col>  
              </Row>    
              <Row>
                <Col xs="2" className="text-left">froze utility shut offs:</Col>
                <Col className="text-left">{ props.propertyData.frozeUtilityShutOffs }</Col>  
              </Row>   
              <Row>
                <Col xs="2" className="text-left">froze mortgage payments:</Col>
                <Col className="text-left">{ props.propertyData.frozeMortgagePayments }</Col>  
              </Row>                                                                                            
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>        
    </div>
  )
}
