/* global localStorage */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Dashboard from './Dashboard'
import NoGps from './NoGps'

class Home extends Component {
  constructor (props) {
    super(props)
    window.drift.on('ready', function (api) {
      // hide the widget when it first loads
      api.widget.hide()
    })
    let firstRun = true
    if (localStorage.getItem('firstRun')) {
      firstRun = JSON.parse(localStorage.getItem('firstRun'))
    }
    this.state = {
      firstRun
    }
    this.showUserGuide = this.showUserGuide.bind(this)
  }

  showUserGuide () {
    if (this.state.firstRun) {
      localStorage.setItem('firstRun', 'true')
      return <Redirect to='/guide' />
    }
  }

  render () {
    return (
      <div>
        {this.state.firstRun ? this.showUserGuide() : navigator.geolocation ? <Dashboard /> : <NoGps />}
      </div>
    )
  }
}

export default Home
