/* global localStorage */
import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import './ManageContacts.css'

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
      <div className='Container'>
        <Alert color='dark' isOpen={contactAdded} toggle={this.toggle}>
          Done! {name} was added to your contact list
        </Alert >
        <Alert color='dark' isOpen={contactEdited} toggle={this.toggle}>
          Great! {name} was updated
        </Alert >
        <span className='Title'>Contact the police</span>
        <hr className='LineBreak' />
        <div className='ContactPolice'>
          <label>
            <span>SMS 111 (If you&#39;re in danger)</span>
          </label>
          <Toggle
            className='Toggle'
            defaultChecked={false}
            onChange={console.log('TBD')}
            icons={false}
            disabled />
        </div>
        <h2 className='Title'>Trusted family or friends</h2>
        <hr className='LineBreak' />
        <ListGroup className='ListGroup'>
          {
            this.getContacts().map(id =>
              <ListGroupItem key={id} className='ListItem' >
                <Link to={{
                  pathname: '/contacts/edit-contact',
                  state: {name: id}
                }} >
                  <span className='Id'>{id}</span><br />
                  <span className='Mobile'>{contacts[id][CONTACT_NUMBER]}</span>
                  <img className='Right' src='marker.png' alt='' />
                  <br />
                  <span className='AlertLevel'>
                    {
                    (contacts[id][CONTACT_VULNERABLE] && contacts[id][CONTACT_DANGER])
                     ? 'Contact when I\'m unsafe & in danger' : (contacts[id][CONTACT_VULNERABLE]
                     ? 'Contact when I\'m unsafe' : (contacts[id][CONTACT_DANGER]) ? 'Contact when I\'m in danger'
                     : '')
                   }
                  </span>
                  <hr className='LineBreak' />
                </Link>
              </ListGroupItem>
            )
          }
        </ListGroup><br />
        <Link to='/contacts/add-contact'>
          <Button className='Button' block>Add Emergency Contact</Button>
        </Link>
      </div>
    )
  }
}

export default ManageContacts
