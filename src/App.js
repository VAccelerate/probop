import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Helplines from './components/Helplines'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/helplines' component={Helplines} />
      </div>
    </Router>
  )
}
  
export default App
