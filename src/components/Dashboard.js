import React, { Component } from 'react'
import { Button } from 'reactstrap'
import SafeModal from './SafeModal'
import { getUserLocation } from '../helpers'
import './Dashboard.css'

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
      <div >
        <div className='buttonContainer'>
          <a href={this.state.contact + this.state.dangerMessage}>
            <Button className='danger' onClick={this.toggle} block>
              I need urgent help
              <p>TBC</p>
            </Button>
          </a>
          <br />
          <br />
          <a href={this.state.contact + this.state.vulnerableMessage}>
            <Button className='warning' onClick={this.toggle} block>
            I&#39;m feeling vulnerable
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
