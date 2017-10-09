import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'
import { getUserLocation } from '../helpers'
import './Dashboard.css'

const GOOGLE_API_KEY = 'AIzaSyCpJxjn4o7c9fZGcqXJcnDeTQnYIhy0Or4'

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

  handleClick (e) {
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
        {this.state.showUserLocation && <div id='googlemaps'><img className='stretch' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.userLocation.latitude},${this.state.userLocation.longitude}&zoom=16&size=480x640&markers=color:red|${this.state.userLocation.latitude},${this.state.userLocation.longitude}&key=${GOOGLE_API_KEY}`} alt='' /></div>}
        <div id='alerts' className='buttonContainer'>
          <a href={this.state.contact + this.state.dangerMessage}>
            <Button className='danger' onClick={this.handleClick} block>Help! I'm in danger</Button>
          </a>
          <a href={this.state.contact + this.state.vulnerableMessage}>
            <Button className='warning' onClick={this.handleClick} block>I feel unsafe</Button>
          </a>
        </div>
        <SafeModal toggle={this.toggle} modal={this.state.modal} />
      </div>
    )
  }
}

export default Dashboard
