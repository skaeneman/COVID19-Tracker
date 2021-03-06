import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StatePropertyData(props) {
  return (
    <div>
        <Card className="text-left"
          bg="light"
          text='dark'    
        >
          <Card.Header className="alert alert-dark">Property Data</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="6" className="text-left">Stopped initiating evictions:</Col>
                <Col className="text-left">{ props.propertyData.stopInitiatingEvictions }</Col>  
              </Row>      
              <Row>
                <Col xs="6" className="text-left">Stopped enforcing evictions:</Col>
                <Col className="text-left">{ props.propertyData.stopEnforcingEvictions }</Col>  
              </Row>    
              <Row>
                <Col xs="6" className="text-left">Grace period or security deposit towards rent:</Col>
                <Col className="text-left">{ props.propertyData.gracePeriodOrSecurityDepositTowardsRent }</Col>  
              </Row>    
              <Row>
                <Col xs="6" className="text-left">Froze utility shut offs:</Col>
                <Col className="text-left">{ props.propertyData.frozeUtilityShutOffs }</Col>  
              </Row>   
              <Row>
                <Col xs="6" className="text-left">Froze mortgage payments:</Col>
                <Col className="text-left">{ props.propertyData.frozeMortgagePayments }</Col>  
              </Row>                                                                                            
            </div>
            </Card.Text>
          </Card.Body>
        </Card>        
    </div>
  )
}
