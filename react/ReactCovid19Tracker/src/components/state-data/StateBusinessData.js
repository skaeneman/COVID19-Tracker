import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

export default function StateBusinessData(props) {  
  return (
    <div>
        <Card className="text-center" bg="light" text='dark' >
          <Card.Header className="bg-info text-white"><b>Businesses</b></Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>   
            <Row>
                <Col xs="2" className="text-left">day cares closed on:</Col>
                <Col className="text-left">{ props.businessData.dayCaresClosedOn }</Col>  
              </Row>                                        
            </div>
            </Card.Text>
          </Card.Body>
        </Card>       
    </div>
  )
}
