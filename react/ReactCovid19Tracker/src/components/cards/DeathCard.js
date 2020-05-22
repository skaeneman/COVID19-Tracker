import React from 'react'
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const Deaths = ({ data: { deaths, lastUpdate } }) => {
  if (!deaths) {
    return (
      <div>
        <Card className="text-center bg-dark">
          <Card.Body>
            <Card.Text className="text-white">
              Loading...
            </Card.Text>
            <Card.Title className="text-white">Deaths</Card.Title>
          </Card.Body>
        </Card>       
      </div>
    )
  }

  return (
    <div>
      <Card className="text-center bg-dark">
        <Card.Body>
          <Card.Text className="covid-numbers text-danger">
            <CountUp 
              start={0}
              end={deaths.value}
              duration={3}
              separator=","
            />
          </Card.Text>
          <Card.Title className="text-white">Deaths</Card.Title>
        </Card.Body>
      </Card>       
    </div>
  )
}

export default Deaths;