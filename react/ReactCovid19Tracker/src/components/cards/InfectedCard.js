import React from 'react'
import { Card } from 'react-bootstrap';

const Confirmed = ({ data: { confirmed, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Confirmed</Card.Header>
        <Card.Body>
          <Card.Title>Confirmed Cases</Card.Title>
          <Card.Text>
            Confirmed cases: { confirmed.value }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{ lastUpdate }</Card.Footer>
      </Card>       
    </div>
  )
}

export default Confirmed;