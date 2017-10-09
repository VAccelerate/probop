/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { Redirect } from 'react-router'

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
  }

  onSubmit (e) {
    e.preventDefault()
    let contacts = {}
    let name
    let mobile
    // If contacts data already exists in localStorage then set that to new
    // contacts object which will be updated, as localStorage is immutable
    console.log(e.target.elements)
    if (localStorage.getItem(CONTACTS)) {
      contacts = JSON.parse(localStorage.getItem(CONTACTS))
    }
    for (const element of e.target.elements) {
      // Get contact name to use as key in localStorage
      if (element.id === CONTACT_NAME) {
        name = element.value
        // If contact of same name already exists then exit
        if (contacts[name]) {
          this.duplicateModalToggle()
          return
          // TODO add notification that contact already exists
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
      <div>
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
              <Label>Name</Label>
              <Input type='text' id={CONTACT_NAME} />
            </FormGroup>
            <FormGroup>
              <Label>Mobile Number</Label>
              <Input type='tel' id={CONTACT_NUMBER} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='checkbox' id={CONTACT_VULNERABLE} />{' '}
                  Vulnerable
              </Label>
                  <Label check>
                    <Input type='checkbox' id={CONTACT_DANGER} />{' '}
                  Danger
              </Label>
                </FormGroup>
              <Button color='primary' size='lg'>Save Changes</Button>{' '}
            </Form>
            <ContactsModal toggle={this.duplicateModalToggle} modal={this.state.duplicateModal}
              message='Contact with the same name already exists' />
            <ContactsModal toggle={this.emptyModalToggle} modal={this.state.emptyModal}
              message='Name and number are required' />
        </div>
        }
      </div>
    )
  }
}

const ContactsModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody>
        <h1>{props.message}</h1>
      </ModalBody>
      <ModalFooter>
        <Button color='success' onClick={props.toggle}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddContact
