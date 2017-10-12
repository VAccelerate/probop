/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { Redirect } from 'react-router'
import './AddContact.css'

import {
  CONTACTS,
  CONTACT_NAME,
  CONTACT_NUMBER,
  CONTACT_VULNERABLE,
  CONTACT_DANGER
} from '../../constants'

class AddContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      duplicateModal: false,
      emptyModal: false,
      added: false,
      name: ''
    }
    this.duplicateModalToggle = this.duplicateModalToggle.bind(this)
    this.emptyModalToggle = this.emptyModalToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.sendSMS = this.sendSMS.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    let contacts = {}
    let name
    let mobile
    // If contacts data already exists in localStorage then set that to new
    // contacts object which will be updated, as localStorage is immutable
    if (localStorage.getItem(CONTACTS)) {
      contacts = JSON.parse(localStorage.getItem(CONTACTS))
    }
    for (const element of Array.from(e.target.elements)) {
      // Get contact name to use as key in localStorage
      if (element.id === CONTACT_NAME) {
        name = element.value
        // If contact of same name already exists then exit
        if (contacts[name]) {
          this.duplicateModalToggle()
          return
        }
        contacts[name] = {}
      } else if (element.id) {
        // use element.checked if a checkbox or element.value if other field
        if (element.type === 'checkbox') {
          contacts[name][element.id] = element.checked
        } else {
          mobile = element.value
          contacts[name][element.id] = element.value
        }
      }
    }
    if (!name || !mobile) {
      this.emptyModalToggle()
      return
    }
    // convert object to json string and save
    localStorage.setItem(CONTACTS, JSON.stringify(contacts))
    // Used for redirect back to manage contacts page
    this.setState({
      added: true,
      name
    })
    this.sendSMS(mobile)
  }

  sendSMS (mobile) {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera
    let message = 'You have been added to my emergency contacts list. Look up the Sing Out app for more information'
    if (/android/i.test(userAgent)) {
      window.location = 'sms:' + mobile + '?body=' + message
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location = 'sms:/open?addresses=' + mobile + '&body=' + message
    }
  }

  duplicateModalToggle () {
    this.setState({
      duplicateModal: !this.state.duplicateModal
    })
  }

  emptyModalToggle () {
    this.setState({
      emptyModal: !this.state.emptyModal
    })
  }

  render () {
    const {added, name} = this.state
    return (
      <div className='Container'>
        {added
        ? <Redirect to={{
          pathname: '/contacts',
          state: {
            added: true,
            name
          }
        }} />
        : <div>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label className='Text'>Name</Label>
              <Input className='Input' type='text' id={CONTACT_NAME} />
            </FormGroup>
            <FormGroup>
              <Label className='Text'>Mobile Number</Label>
              <Input className='Input' type='tel' id={CONTACT_NUMBER} />
            </FormGroup>
            <FormGroup check>
              <h6 className='Text'> Contact this person when I am </h6>
              <Label check className='Text Danger'>
                <Input className='Checkbox' type='checkbox' id={CONTACT_VULNERABLE} />{' '}
                  Unsafe
              </Label>
              <Label check className='Text'>
                <Input className='Checkbox' type='checkbox' id={CONTACT_DANGER} />{' '}
                  In Danger
              </Label>
            </FormGroup>
            <Button className='AddButton' block>Add</Button>{' '}
          </Form>
          <ContactsModal toggle={this.duplicateModalToggle} modal={this.state.duplicateModal}
            message='Contact with the same name already exists' />
          <ContactsModal toggle={this.emptyModalToggle} modal={this.state.emptyModal}
            message='Name and number are required' />
          <p className='Notice'>When you add a contact, we will send them a text message to let them know you&#39;ve chosen them to be your safety contact</p>
        </div>
        }
      </div>
    )
  }
}

const ContactsModal = (props) => {
  return (
    <Modal className='Modal' isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody>
        <h1 className='ModalText'>{props.message}</h1>
      </ModalBody>
      <ModalFooter>
        <Button className='OkButton' onClick={props.toggle} block>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddContact
