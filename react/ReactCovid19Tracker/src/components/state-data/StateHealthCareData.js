import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StateHealthCareData(props) {
  console.log("missing data in health care...: ", props.healthCareData.medicaidExpansion)

  return (
    <div>
        <Card className="text-center"
          bg="light"
          text='dark'    
        >
          <Card.Header>Health Care Data</Card.Header>
          <Card.Body>
            <Card.Title>Health Care</Card.Title>
            <Card.Text as="span">
            <div>
              <Row>                        
                <Col xs="4" className="text-left">modify medicaid with 1135 waivers:</Col>
                <Col className="text-left">{ props.healthCareData.modifyMedicaidWithWaivers }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">aca special enrollment period:</Col>
                <Col className="text-left">{ props.healthCareData.acaSpecialEnrollmentPeriod }</Col>
              </Row>     
              <Row>
                <Col xs="4" className="text-left">audio only telehealth:</Col>
                <Col className="text-left">{ props.healthCareData.audioOnlyTelehealth }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">allow or expand medicaid telehealth:</Col>
                <Col className="text-left">{ props.healthCareData.allowOrExpandMedicaidTelehealth }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">suspended elective medical:</Col>
                <Col className="text-left">{ props.healthCareData.suspendedElectiveMedical }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">resumed elective medical:</Col>
                <Col className="text-left">{ props.healthCareData.resumedElectiveMedical }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">made efforts to limit abortions:</Col>
                <Col className="text-left">{ props.healthCareData.madeEffortsToLimitAbortions }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">limit abortion details:</Col>
                <Col className="text-left">{ props.healthCareData.limitAbortionDetails }</Col>
              </Row> 
              <Row>
                <Col xs="4" className="text-left">medicaid expansion:</Col>
                <Col className="text-left">{ props.healthCareData.medicaidExpansion }</Col>
              </Row>                                                                                                                         
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>    
    </div>
  )
}
