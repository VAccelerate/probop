/* global localStorage */
import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'
import Menu from './Menu'
import { getUserLocation } from '../helpers'
import './Dashboard.css'
import { CONTACTS } from '../constants'

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
      <div >
        <Menu />
        <div className='buttonContainer'>
          <a href={this.state.dangerAddress + this.state.dangerMessage}>
            <Button className='Danger' onClick={this.toggle} block>
              <h3>I need urgent help</h3>
              <p>TBC</p>
            </Button>
          </a>
          <br />
          <br />
          <a href={this.state.vulnerableAddress + this.state.vulnerableMessage}>
            <Button color='warning' onClick={this.toggle} >
              <h3>I&#39;m feeling vulnerable</h3>
            </Button>
          </a>
          <SafeModal toggle={this.toggle} modal={this.state.modal} />
          {console.log(this.state.userLocation)}
          <br />
          <br />
          <div className='location'>
            <a href={`http://www.google.com/maps/place/${this.state.userLocation.latitude},${this.state.userLocation.longitude}`}>See Where I am </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
