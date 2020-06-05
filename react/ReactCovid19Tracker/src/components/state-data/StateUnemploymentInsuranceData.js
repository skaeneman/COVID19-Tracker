import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StateUnemploymentInsuranceData(props) {
  return (
    <div>
        <Card className="text-left"
          bg="light"
          text='dark'    
        >
          <Card.Header className="alert alert-dark">Unemployment Insurance</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="6" className="text-left">No UI Waiting Period</Col>
                <Col className="text-left">{ props.unemploymentData.noUiWaitingPeriod }</Col>  
              </Row>      
              <Row>
                <Col xs="6" className="text-left">Waived UI Waiting Period</Col>
                <Col className="text-left">{ props.unemploymentData.waivedUiWaitingPeriod }</Col>  
              </Row>  
              <Row>
                <Col xs="6" className="text-left">Waived Work Search For UI</Col>
                <Col className="text-left">{ props.unemploymentData.waivedWorkSearchForUi }</Col>  
              </Row>  
              <Row>
                <Col xs="6" className="text-left">Expand UI To Quarantined People</Col>
                <Col className="text-left">{ props.unemploymentData.expandUiToQuarantinedPeople }</Col>  
              </Row>  
              <Row>
                <Col xs="6" className="text-left">Expand UI For Lost Childcare Or School Closures</Col>
                <Col className="text-left">{ props.unemploymentData.expandUiForLostChildcareOrSchoolClosures }</Col>  
              </Row>  
              <Row>
                <Col xs="6" className="text-left">Extended Time For People On UI</Col>
                <Col className="text-left">{ props.unemploymentData.extendedTimeForPeopleOnUi }</Col>  
              </Row>  
              <Row>
                <Col xs="6" className="text-left">Paid Sick Leave</Col>
                <Col className="text-left">{ props.unemploymentData.paidSickLeave }</Col>  
              </Row>                                                                                                    
            </div>
            </Card.Text>
          </Card.Body>
        </Card>         
    </div>
  )
}
