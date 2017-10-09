/* global localStorage */
import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'
import { getUserLocation } from '../helpers'
import './Dashboard.css'
import { CONTACTS } from '../constants'

const GOOGLE_API_KEY = 'AIzaSyCpJxjn4o7c9fZGcqXJcnDeTQnYIhy0Or4'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      vulnerableAddress: '',
      dangerAddress: '',
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

    if (localStorage.getItem(CONTACTS)) {
      let contacts = JSON.parse(localStorage.getItem(CONTACTS))
      let contactKeys = [Object.keys(contacts)]
      let vulnerableContacts = []
      let dangerContacts = []

      contactKeys.forEach((keys) => {
        keys.forEach((contact) => {
          if (contacts[contact].contactVulnerable) {
            vulnerableContacts.push(contacts[contact].contactNumber)
          }
          if (contacts[contact].contactDanger) {
            dangerContacts.push(contacts[contact].contactNumber)
          }
        })
      })

      let userAgent = navigator.userAgent || navigator.vendor || window.opera

      if (/android/i.test(userAgent)) {
        this.setState({
          vulnerableAddress: 'sms:' + vulnerableContacts.toString(),
          dangerAddress: 'sms:' + dangerContacts.toString()
        })
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.setState({
          vulnerableMessage: '&body=I%20am%20feeling%20vulnerable',
          dangerMessage: '&body=I%20am%20in%20danger',
          vulnerableAddress: 'sms://open?addresses=' + vulnerableContacts.toString() + '/',
          dangerAddress: 'sms://open?addresses=' + dangerContacts.toString() + '/'
        })
      }
    }
  }

  render () {
    return (
      <div>
        {this.state.showUserLocation && <div id='googlemaps'><img className='stretch' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.userLocation.latitude},${this.state.userLocation.longitude}&zoom=16&size=480x640&markers=color:red|${this.state.userLocation.latitude},${this.state.userLocation.longitude}&key=${GOOGLE_API_KEY}`} alt='' /></div>}
        <div id='alerts' className='buttonContainer'>
          <a href={this.state.contact + this.state.dangerMessage}>
            <Button className='danger' onClick={this.handleClick} block>Help! I&#39;m in danger</Button>
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
