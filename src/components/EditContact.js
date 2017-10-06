/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import Menu from './Menu'
import {
  CONTACTS,
  CONTACT_NAME,
  CONTACT_NUMBER,
  CONTACT_VULNERABLE,
  CONTACT_DANGER
} from '../constants'

class EditContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
    this.getContactData = this.getContactData.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    let contact = {}
    let name
    if (JSON.parse(localStorage.getItem(CONTACTS))) {
      contact = JSON.parse(localStorage.getItem(CONTACTS))
    }
    for (const element of e.target.elements) {
      if (element.id === CONTACT_NAME) {
        name = element.value
        if (contact[name]) {
          break
        }
        contact[name] = {}
      } else if (element.id) {
        if (element.type === 'chekbox') {
          contact[name][element.id] = element.checked
        } else {
          contact[name][element.id] = element.value
        }
      }
    }
    localStorage.setItem(CONTACTS, JSON.stringify(contact))
    console.log(JSON.parse(localStorage.getItem(CONTACTS)))
  }

  toggle () {
  }

  getContactData () {

  }

  render () {
    return (
      <div>
        <Menu />
        <h1>Manage Contacts</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for='exampleName'>Name</Label>
            <Input type='text' id={CONTACT_NAME} />
          </FormGroup>
          <FormGroup>
            <Label for='exampleNumber'>Mobile Number</Label>
            <Input type='text' id={CONTACT_NUMBER} placeholder='mobile number here' />
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
          <Button color='secondary' size='lg'>Remove Contact</Button>
        </Form>
      </div>
    )
  }
}

export default EditContact
