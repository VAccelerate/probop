import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Helplines from './components/Helplines'
import Contacts from './components/contacts/Contacts'
import Guide from './components/Guide'
import Menu from './components/Menu'

const App = (props) => (
  <div>
    <Menu />
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/profile' component={Profile} />
      <Route path='/helplines' component={Helplines} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/guide' component={Guide} />
    </Switch>
  </div>
)

export default App
