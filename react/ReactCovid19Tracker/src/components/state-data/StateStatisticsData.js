import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StateStatisticsData(props) {
  return (
    <div>
        <Card className="text-left"
          bg="light"
          text='dark'    
        >
          <Card.Header className="alert alert-dark">Statistics</Card.Header>
          <Card.Body>
            <Card.Text as="span">
            <div>   
              <Row>
                <Col xs="2" className="text-left">populationDensityPerSquareMile:</Col>
                <Col className="text-left">{ props.statisticsData.populationDensityPerSquareMile }</Col>  
              </Row>               
              <Row>
                <Col xs="2" className="text-left">population2018:</Col>
                <Col className="text-left">{ props.statisticsData.population2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">squareMiles:</Col>
                <Col className="text-left">{ props.statisticsData.squareMiles }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">homelessPopulation:</Col>
                <Col className="text-left">{ props.statisticsData.homelessPopulation }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">percentUnemployed2018:</Col>
                <Col className="text-left">{ props.statisticsData.percentUnemployed2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">percentLivingBelowFedPovertyLine2018:</Col>
                <Col className="text-left">{ props.statisticsData.percentLivingBelowFedPovertyLine2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">percentAtRiskOfCovid:</Col>
                <Col className="text-left">{ props.statisticsData.percentAtRiskOfCovid }</Col>  
              </Row> 
              <Row>
                <Col xs="2" className="text-left">allCausesOfDeath2018:</Col>
                <Col className="text-left">{ props.statisticsData.allCausesOfDeath2018 }</Col>  
              </Row>                                                                                                                            
            </div>
            </Card.Text>
          </Card.Body>
        </Card>        
    </div>
  )
}
