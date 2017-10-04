import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Helplines from './components/Helplines'

const App = (props) => (
  <div>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/helplines' component={Helplines}/>
    </Switch>
  </div>
)

export default App
