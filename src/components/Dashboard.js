import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'
import Menu from './Menu'
import { getUserLocation } from '../helpers'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      contact: 'sms://+14035550185/',
      vulnerableMessage: '?body=I%20am%20feeling%20vulnerable',
      dangerMessage: '?body=I%20am%20in%20danger',
      userLocation: {
        latitude: 0,
        longitude: 0
      },
      showUserLocation: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    getUserLocation((position) => {
      this.setState({
        userLocation: position
      })
    console.log(this.state.userLocation)
    })
    this.toggle()
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount () {
    getUserLocation((position) => {
      this.setState({
        userLocation: position,
        showUserLocation: true
      })
    })
    let userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.setState({
        vulnerableMessage: '&body=I%20am%20feeling%20vulnerable',
        dangerMessage: '&body=I%20am%20in%20danger'
      })
    }
  }

  render () {
    return (
      <div>
        <Menu />
        <h1>Dashboard</h1>
        <a href={this.state.contact + this.state.dangerMessage}>
          <Button color='danger' onClick={this.handleClick}>
            <h3>I need urgent help</h3>
            <p>TBC</p>
          </Button>
        </a>
        <br />
        <br />
        <a href={this.state.contact + this.state.vulnerableMessage}>
          <Button color='warning' onClick={this.handleClick}>
            <h3>I&#39;m feeling vulnerable</h3>
          </Button>
        </a>
        <SafeModal toggle={this.toggle} modal={this.state.modal} />
        <br />
        <br />
        {this.state.showUserLocation ? <a href={`http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`}>See Where I am</a> : null}
      </div>
    )
  }
}

export default Dashboard
