/* global localStorage */
import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import { CONTACTS, CONTACT_NUMBER, CONTACT_VULNERABLE, CONTACT_DANGER } from '../../constants'

class ManageContacts extends Component {
  constructor (props) {
    super(props)
    let contactAdded = false
    let contactEdited = false
    let name = ''
    let contacts = []
    if (localStorage.getItem(CONTACTS)) {
      contacts = JSON.parse(localStorage.getItem(CONTACTS))
    }
    if (this.props.location.state) {
      contactAdded = this.props.location.state.added || false
      contactEdited = this.props.location.state.edited || false
      name = this.props.location.state.name || ''
    }
    this.state = {
      contactAdded,
      contactEdited,
      name,
      contacts
    }
    this.toggle = this.toggle.bind(this)
    this.getContacts = this.getContacts.bind(this)
  }

  toggle () {
    this.setState({
      contactAdded: false,
      contactEdited: false
    })
  }

  getContacts () {
    if (localStorage.getItem(CONTACTS)) {
      return Object.keys(JSON.parse(localStorage.getItem(CONTACTS)))
    }
    return []
  }

  render () {
    const {contactAdded, contactEdited, name, contacts} = this.state
    return (
      <div>
        <div>
          <Alert color='dark' isOpen={contactAdded} toggle={this.toggle}>
            Done! {name} was added to your contact list
          </Alert >
          <Alert color='dark' isOpen={contactEdited} toggle={this.toggle}>
            Great! {name} was updated
          </Alert >
          <h2>Contact the police</h2>
          <hr />
          <label>
            <span>SMS 111 (danger alert only)</span>
          </label>
          <Toggle
            defaultChecked={false}
            onChange={console.log('TBD')}
            icons={false}
            disabled />
          <h2>Trusted family or friends</h2>
          <hr />
          <ListGroup>
            {
              this.getContacts().map(id =>
                <ListGroupItem key={id} >
                  <Link to={{
                    pathname: '/contacts/edit-contact',
                    state: {name: id}
                  }} >
                    <span>{id}</span><br />
                    <span>{contacts[id][CONTACT_NUMBER]}</span><br />
                    <span>
                      {
                      (contacts[id][CONTACT_VULNERABLE] && contacts[id][CONTACT_DANGER])
                       ? 'Vulnerable and Danger alert' : (contacts[id][CONTACT_VULNERABLE]
                       ? 'Vulnerable alert' : (contacts[id][CONTACT_DANGER]) ? 'Danger Alert'
                       : '')
                     }
                    </span>
                  </Link>
                </ListGroupItem>
              )
            }
          </ListGroup><br />
          <Link to='/contacts/add-contact'>
            <Button color='primary' size='lg'>Add Contact</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ManageContacts
