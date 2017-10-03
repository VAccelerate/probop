import React, { Component } from 'react'
import { Button } from 'reactstrap'

const Dashboard = (props) => {
    return (
      <div>
        <h1>Dashboard</h1>
        <Button color="danger">
          <h3>I need urgent help</h3>
          <p>TBC</p>
        </Button>
        <br/>
        <br/>
        <Button color="warning">
          <h3>I&#39;m feeling vulnerable</h3>
          </Button>
      </div>
    )
}

export default Dashboard
