import React from 'react'
import { Button } from 'reactstrap'

import './NoGps.css'

const NoGps = () => {
  return (
    <div className='gps-container'>
      <h2>We can't find your GPS location</h2>
      <p>Call 111 right now if you need help</p>
      <a href='tel://111'><Button className='one-one-one'>Call 111</Button></a>
    </div>
  )
}

export default NoGps
