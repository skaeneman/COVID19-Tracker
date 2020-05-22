import React from 'react'
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const Recovered = ({ data: { recovered, lastUpdate } }) => {
  if (!recovered) {
    return (
      <div>
        <Card className="text-center bg-dark">
          <Card.Body>
            <Card.Text className="text-white">
              Loading...
            </Card.Text>
            <Card.Title className="text-white">Recovered</Card.Title>
          </Card.Body>
        </Card>       
      </div>
    )
  }

  return (
    <div>
      <Card className="text-center bg-dark">
        <Card.Body>
          <Card.Text className="covid-numbers text-success">
            <CountUp 
              start={0}
              end={recovered.value}
              duration={3}
              separator=","
            />
          </Card.Text>
          <Card.Title className="text-white">Recovered</Card.Title>
        </Card.Body>
      </Card>       
    </div>
  )
}

export default Recovered;