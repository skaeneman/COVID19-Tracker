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
                <Col xs="6" className="text-left">Population Density Per Square Mile:</Col>
                <Col className="text-left">{ props.statisticsData.populationDensityPerSquareMile }</Col>  
              </Row>               
              <Row>
                <Col xs="6" className="text-left">Population 2018:</Col>
                <Col className="text-left">{ props.statisticsData.population2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Square Miles:</Col>
                <Col className="text-left">{ props.statisticsData.squareMiles }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Homeless Population:</Col>
                <Col className="text-left">{ props.statisticsData.homelessPopulation }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Percent Unemployed 2018:</Col>
                <Col className="text-left">{ props.statisticsData.percentUnemployed2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Percent Living Below Fed Poverty Line 2018:</Col>
                <Col className="text-left">{ props.statisticsData.percentLivingBelowFedPovertyLine2018 }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">Percent At Risk Of Covid:</Col>
                <Col className="text-left">{ props.statisticsData.percentAtRiskOfCovid }</Col>  
              </Row> 
              <Row>
                <Col xs="6" className="text-left">All Causes Of Death 2018:</Col>
                <Col className="text-left">{ props.statisticsData.allCausesOfDeath2018 }</Col>  
              </Row>                                                                                                                            
            </div>
            </Card.Text>
          </Card.Body>
        </Card>        
    </div>
  )
}
