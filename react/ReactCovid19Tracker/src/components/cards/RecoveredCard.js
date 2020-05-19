import React from 'react'
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const Recovered = ({ data: { recovered, lastUpdate } }) => {
  if (!recovered) {
    return 'Loading...';
  }

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Recovered</Card.Header>
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Text>
          <CountUp 
              start={0}
              end={recovered.value}
              duration={5}
              separator=","
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{ lastUpdate }</Card.Footer>
      </Card>       
    </div>
  )
}

export default Recovered;