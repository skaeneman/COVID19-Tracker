import React from 'react'
import { Card } from 'react-bootstrap';

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
            Deaths: { deaths.value }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{ lastUpdate }</Card.Footer>
      </Card>       
    </div>
  )
}

export default Deaths;