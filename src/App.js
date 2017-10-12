import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Helplines from './components/Helplines'
import Contacts from './components/contacts/Contacts'
import Guide from './components/Guide'
import FAQ from './components/FAQ'
import Menu from './components/Menu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu () {
    this.setState({
      showMenu: true
    })
  }

  render () {
    return (
      <div>
        {this.state.showMenu && <Menu />}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/helplines' component={Helplines} />
          <Route path='/contacts' render={() => <Contacts showMenu={this.showMenu} />} />
          <Route path='/guide' component={Guide} />
          <Route path='/faq' component={FAQ} />
        </Switch>
      </div>
    )
  }
}

export default App
