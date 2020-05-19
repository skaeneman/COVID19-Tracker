import React from 'react'
import { Card } from 'react-bootstrap';

export default function StatePolicyData(props) {
  
  console.log("props in StatePolicyData ", props.stateData);

  // const { myState } = props.stateData
  // console.log("myState ", myState);

  return (
    <div>
      <h3>hello from state policy data page...</h3>

        <Card className="text-center"
          bg="light"
          text='dark'    
        >
          <Card.Header>State Data</Card.Header>
          <Card.Body>
            <Card.Title>State Data</Card.Title>
            <Card.Text>
            {/* id: { state.id } */}
            id: { props.stateData.id }
            state: { props.stateData.stateName }
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>       
    </div>
  )
}
