import React, { Component } from 'react'
import { Button } from 'reactstrap'
import SafeModal from './SafeModal'
import Menu from './Menu'
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
      }
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount () {
    getUserLocation((position) => {
      this.setState({
        userLocation: position
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
      <div className='container'>
        <div className='Menu'>
          <Menu />
        </div>
        <div className='buttonContainer'>
          <a href={this.state.contact + this.state.dangerMessage}>
            <Button className='Danger' onClick={this.toggle} block>
              <h3>I need urgent help</h3>
              <p>TBC</p>
            </Button>
          </a>
          <br />
          <br />
          <a href={this.state.contact + this.state.vulnerableMessage}>
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
