import React from 'react'

import Dashboard from './Dashboard'
import NoGps from './NoGps'

const Home = () => {
  return (
    <div>
      {navigator.geolocation ? <Dashboard /> : <NoGps />}
    </div>
  )
}

export default Home
