import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Helplines from './components/Helplines'
import Contacts from './components/Contacts'

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/helplines' component={Helplines} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </Router>
  )
}
  
export default App
