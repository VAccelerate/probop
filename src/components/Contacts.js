/* global localStorage */
import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap'

import AddContact from './AddContact'
import Menu from './Menu'
import { CONTACTS } from '../constants'

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.state = {manageVisible: false}
    this.toggle = this.toggle.bind(this)
    this.getContacts = this.getContacts.bind(this)
  }

  toggle () {
    this.setState({
      manageVisible: !this.state.manageVisible
    })
  }

  getContacts () {
    return Object.keys(JSON.parse(localStorage.getItem(CONTACTS)))
  }

  render () {
    return (
      <div>
        {!this.state.manageVisible
          ? <div>
            <Menu />
            <h1>Contacts</h1>
            <ListGroup>
              {
                this.getContacts().map(name =>
                  <ListGroupItem key={name} >
                    <ListGroupItemHeading onClick={console.log('clicked')} >{name}</ListGroupItemHeading>
                  </ListGroupItem>
                )
              }
            </ListGroup><br />
            <Button color='primary' size='lg' onClick={this.toggle}>
              Add Contact
            </Button>
          </div>
          : <AddContact />
        }
      </div>
    )
  }
}

export default Contacts
