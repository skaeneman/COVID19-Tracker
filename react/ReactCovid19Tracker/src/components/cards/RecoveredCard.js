import React from 'react'
import { Card } from 'react-bootstrap';

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
            Recovered: { recovered.value }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{ lastUpdate }</Card.Footer>
      </Card>       
    </div>
  )
}

export default Recovered;