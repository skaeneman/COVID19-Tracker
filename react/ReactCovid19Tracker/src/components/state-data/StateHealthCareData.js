import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StateHealthCareData(props) {
  console.log("missing data in health care...: ", props.healthCareData.medicaidExpansion)

  return (
    <div>
        <Card className="text-left" bg="light" text='dark' >
          <Card.Header className="alert alert-dark">Health Care Data</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>
              <Row>                        
                <Col xs="6" className="text-left">Modify medicaid with 1135 waivers:</Col>
                <Col className="text-left">{ props.healthCareData.modifyMedicaidWithWaivers }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">ACA special enrollment period:</Col>
                <Col className="text-left">{ props.healthCareData.acaSpecialEnrollmentPeriod }</Col>
              </Row>     
              <Row>
                <Col xs="6" className="text-left">Audio only telehealth:</Col>
                <Col className="text-left">{ props.healthCareData.audioOnlyTelehealth }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Allow or expand medicaid telehealth:</Col>
                <Col className="text-left">{ props.healthCareData.allowOrExpandMedicaidTelehealth }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Suspended elective medical:</Col>
                <Col className="text-left">{ props.healthCareData.suspendedElectiveMedical }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Resumed elective medical:</Col>
                <Col className="text-left">{ props.healthCareData.resumedElectiveMedical }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Made efforts to limit abortions:</Col>
                <Col className="text-left">{ props.healthCareData.madeEffortsToLimitAbortions }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Limit abortion details:</Col>
                <Col className="text-left">{ props.healthCareData.limitAbortionDetails }</Col>
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Medicaid expansion:</Col>
                <Col className="text-left">{ props.healthCareData.medicaidExpansion }</Col>
              </Row>                                                                                                                         
            </div>
            </Card.Text>
          </Card.Body>
        </Card>    
    </div>
  )
}
