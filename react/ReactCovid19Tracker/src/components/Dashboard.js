import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
          <h1>Dashboard</h1>
          <h1>{props.loggedInStatus}</h1>
        </div>
    )
}
