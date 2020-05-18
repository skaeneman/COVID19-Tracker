import React from 'react'
import { Card } from 'react-bootstrap';

const Confirmed = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            Confirmed cases: {confirmed.value}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>       
    </div>
  )
}

export default Confirmed;