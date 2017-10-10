/* global localStorage */
import React, { Component } from 'react'
import { Button, UncontrolledAlert } from 'reactstrap'

import SafeModal from './SafeModal'
import { getUserLocation, getContactNumbers } from '../helpers'
import './Dashboard.css'
import { CONTACTS, CONTACT_VULNERABLE, CONTACT_DANGER } from '../constants'

const GOOGLE_API_KEY = 'AIzaSyCpJxjn4o7c9fZGcqXJcnDeTQnYIhy0Or4'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      modalMessage: 'Danger alert sent!',
      modalStyle: {
        backgroundColor: '#e60000'
      },
      vulnerableContacts: '',
      dangerContacts: '',
      vulnerableMessage: '?body=I am feeling unsafe. This is my location: ',
      dangerMessage: '?body=Please help, I am in danger. This is my location: ',
      userLocation: {
        latitude: 0,
        longitude: 0
      },
      showUserLocation: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e, level) {
    e.preventDefault()
    getUserLocation((position) => {
      this.setState({
        userLocation: position
      })
      console.log(this.state.userLocation)
    })
    this.toggle()

    if (level === 'danger') {
      window.location = this.state.dangerContacts + (this.state.dangerMessage + `http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`)
      this.setState({
        modalMessage: 'Danger alert sent!',
        modalStyle: {
          backgroundColor: '#e60000'
        }
      })
    }
    if (level === 'vulnerable') {
      window.location = this.state.vulnerableContacts + (this.state.vulnerableMessage + `http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`)
      this.setState({
        modalMessage: 'Unsafe alert sent!',
        modalStyle: {
          backgroundColor: '#14afb8'
        }
      })
    }
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
      let dangerNumbers = getContactNumbers(CONTACT_DANGER, JSON.parse(localStorage.getItem(CONTACTS)))
      let vulnerableNumbers = getContactNumbers(CONTACT_VULNERABLE, JSON.parse(localStorage.getItem(CONTACTS)))

      let userAgent = navigator.userAgent || navigator.vendor || window.opera

      if (/android/i.test(userAgent)) {
        this.setState({
          vulnerableContacts: 'sms:' + vulnerableNumbers.toString(),
          dangerContacts: 'sms:' + dangerNumbers.toString()
        })
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.setState({
          vulnerableMessage: '&body=I am feeling unsafe. This is my location: ',
          dangerMessage: '&body=Please help, I am in danger. This is my location: ',
          vulnerableContacts: 'sms:/open?addresses=' + vulnerableNumbers.toString(),
          dangerContacts: 'sms:/open?addresses=' + dangerNumbers.toString()
        })
      }
    }
  }

  render () {
    return (
      <div>
        {this.state.showUserLocation && <div id='googlemaps'><img className='stretch' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.userLocation.latitude},${this.state.userLocation.longitude}&zoom=16&size=480x640&markers=icon:https://i.imgur.com/0FIc2NZ.png|${this.state.userLocation.latitude},${this.state.userLocation.longitude}&key=${GOOGLE_API_KEY}`} alt='' /></div>}
        <div id='offlineAlert'>
          {!navigator.onLine &&
          <UncontrolledAlert color='dark'>
            We don't have your map location because you're offline. But we can still find you through your GPS location
          </UncontrolledAlert>
          }
        </div>
        <div id='alerts' className='buttonContainer'>
          <Button className='danger' onClick={(e) => this.handleClick(e, 'danger')} block>Help! I&#39;m in danger</Button>
          <Button className='warning' onClick={(e) => this.handleClick(e, 'vulnerable')} block>I feel unsafe</Button>
        </div>
        <SafeModal toggle={this.toggle} modal={this.state.modal} modalMessage={this.state.modalMessage} style={this.state.modalStyle} />
      </div>
    )
  }
}

export default Dashboard
