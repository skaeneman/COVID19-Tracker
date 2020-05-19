import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

export default function StatePolicyData(props) {
  
  console.log("props in StatePolicyData ", props.stateData);

  // const { myState } = props.stateData
  // console.log("myState ", myState);

  return (
    <div>
      <h3>hello from state policy data page...</h3>

        <Card className="text-center"
          bg="light"
          text='dark'    
        >
          <Card.Header>State Data</Card.Header>
          <Card.Body>
            <Card.Title>State Data</Card.Title>
            <Card.Text as="span">
            <div>
            {/* id: { state.id } */}
              <Row>
                <Col xs="2" className="text-left">id:</Col>
                <Col className="text-left">{ props.stateData.id }</Col>
              </Row> 
              <Row>
                <Col xs="2" className="text-left">state:</Col>
                <Col className="text-left">{ props.stateData.stateName }</Col>
              </Row>
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>       
    </div>
  )
}
