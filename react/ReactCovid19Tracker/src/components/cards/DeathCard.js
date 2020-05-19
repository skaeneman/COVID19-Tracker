import React from 'react'
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const Deaths = ({ data: { deaths, lastUpdate } }) => {
  if (!deaths) {
    return 'Loading...';
  }

  return (
    <div>
      <Card className="text-center"
        bg="light"
        text='dark'    
      >
        <Card.Header>Deaths</Card.Header>
        <Card.Body>
          <Card.Title>Deaths</Card.Title>
          <Card.Text>
          <CountUp 
              start={0}
              end={deaths.value}
              duration={3}
              separator=","
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{ lastUpdate }</Card.Footer>
      </Card>       
    </div>
  )
}

export default Deaths;