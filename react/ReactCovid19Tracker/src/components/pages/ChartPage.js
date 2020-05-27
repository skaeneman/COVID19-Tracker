import React, { Component } from 'react';
import StoppedEvictionsChart from '../charts/StoppedEvictionsChart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ChartPage extends Component {
  render() {
    return (
      <div>
        
        {/* <Doughnut data={...} /> */}
        <Container fluid>
          <br />
          <Row>
            <Col as={Col} sm="6" >
              <StoppedEvictionsChart />
            </Col>
            <Col as={Col} sm="6" >
              <StoppedEvictionsChart />              
            </Col>                     
          </Row>
          <br />
        </Container>

      </div>
    )
  }
}
