import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>
  )
}
  
export default App
