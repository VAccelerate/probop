import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'
import Menu from './Menu'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      contact: 'sms://+14035550185',
      vulnerableMessage: '?body=I%20am%20feeling%20vulnerable',
      dangerMessage: '?body=I%20am%20in%20danger'
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <div>
        <Menu />
        <h1>Dashboard</h1>
        <a href={this.state.contact + this.state.dangerMessage}>
          <Button color='danger' onClick={this.toggle}>
            <h3>I need urgent help</h3>
            <p>TBC</p>
          </Button>
        </a>
        <br />
        <br />
        <a href={this.state.contact + this.state.vulnerableMessage}>
          <Button color='warning' onClick={this.toggle}>
            <h3>I&#39;m feeling vulnerable</h3>
          </Button>
        </a>
        <SafeModal toggle={this.toggle} modal={this.state.modal} />
      </div>
    )
  }
}

export default Dashboard
