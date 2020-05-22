import React from 'react'
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const Confirmed = ({ data: { confirmed, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div>
        <Card className="text-center bg-dark">
          <Card.Body>
            <Card.Text className="text-white">
              Loading...
            </Card.Text>
            <Card.Title className="text-white">Confirmed</Card.Title>
          </Card.Body>
        </Card>       
      </div>
    )
  }

  return (
    <div>
      <Card className="text-center bg-dark">
        <Card.Body>
          <Card.Text className="covid-numbers text-white">
            <CountUp 
              start={0}
              end={confirmed.value}
              duration={3}
              separator=","
            />
          </Card.Text>
          <Card.Title className="text-white">Confirmed</Card.Title>
        </Card.Body>
      </Card>       
    </div>
  )
}

export default Confirmed;