/* global localStorage */
import React, { Component } from 'react'
import { Button, UncontrolledAlert } from 'reactstrap'

import SafeModal from './SafeModal'
import { getUserLocation, getContactNumbers } from '../helpers'
import './Dashboard.css'
import { CONTACTS, CONTACT_VULNERABLE, CONTACT_DANGER } from '../constants'

const GOOGLE_API_KEY = 'AIzaSyCpJxjn4o7c9fZGcqXJcnDeTQnYIhy0Or4'

let dangerNumbers = []
let vulnerableNumbers = []

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contactsAlert: false,
      modal: false,
      modalContent: {
        heading: 'Danger alert sent!',
        message: 'We\'ve just sent a text message to your list',
        button: 'I feel safe now',
        style: {
          backgroundColor: '#e60000'
        }
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
      if (dangerNumbers.length > 0) {
        window.location = this.state.dangerContacts + (this.state.dangerMessage + `http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`)
        this.setState({
          modalContent: {
            heading: 'Danger alert sent!',
            message: 'We\'ve just sent a text message to your list',
            button: 'I feel safe now',
            style: {
              backgroundColor: '#e60000'
            }
          }
        })
      } else {
        this.setState({
          modalContent: {
            heading: 'Not sent!',
            message: 'You haven\'t selected anyone to be contacted when you are in danger. You can update this in the "manage contacts" section.',
            button: 'OK',
            style: {
              backgroundColor: '#e60000'
            }
          }
        })
      }
    }
    if (level === 'vulnerable') {
      if (vulnerableNumbers > 0) {
        window.location = this.state.vulnerableContacts + (this.state.vulnerableMessage + `http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`)
        this.setState({
          modalContent: {
            heading: 'Unsafe alert sent!',
            message: 'We\'ve just sent a text message to your list',
            button: 'I feel safe now',
            style: {
              backgroundColor: '#14afb8'
            }
          }
        })
      } else {
        this.setState({
          modalContent: {
            heading: 'Not sent!',
            message: 'You haven\'t selected anyone to be contacted when you are feeling unsafe. You can update this in the "manage contacts" section.',
            button: 'OK',
            style: {
              backgroundColor: '#14afb8'
            }
          }
        })
      }
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
    if (!localStorage.getItem(CONTACTS)) {
      this.setState({
        contactsAlert: true
      })
    } else if (Object.keys(JSON.parse(localStorage.getItem(CONTACTS))).length > 0) {
      dangerNumbers = getContactNumbers(CONTACT_DANGER, JSON.parse(localStorage.getItem(CONTACTS)))
      vulnerableNumbers = getContactNumbers(CONTACT_VULNERABLE, JSON.parse(localStorage.getItem(CONTACTS)))

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
    } else {
      this.setState({
        contactsAlert: true
      })
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
        <div id='contactsAlert'>
          {this.state.contactsAlert &&
          <UncontrolledAlert color='dark'>
            You haven&#39;t saved any contacts. Go to manage contacts to add some.
          </UncontrolledAlert>
          }
        </div>
        <div id='alerts' className='buttonContainer'>
          <div className='danger-border'><Button className='danger' type='button' onClick={(e) => this.handleClick(e, 'danger')} block>Help! I&#39;m in danger</Button></div>
          <div className='warning-border'><Button className='warning' type='button' onClick={(e) => this.handleClick(e, 'vulnerable')} block>I feel unsafe</Button></div>
        </div>
        <SafeModal toggle={this.toggle} modal={this.state.modal} content={this.state.modalContent} />
      </div>
    )
  }
}

export default Dashboard
