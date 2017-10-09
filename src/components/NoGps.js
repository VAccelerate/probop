import React from 'react'
import { Button } from 'reactstrap'

const NoGps = () => {
  return (
    <div>
      <h1>No GPS Location</h1>
      <p>Please call 111 if you need help</p>
      <a href='tel://111'><Button>Call 111</Button></a>
    </div>
  )
}

export default NoGps
