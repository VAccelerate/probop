/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import Menu from '../Menu'
import {
  CONTACTS,
  CONTACT_NAME,
  CONTACT_NUMBER,
  CONTACT_VULNERABLE,
  CONTACT_DANGER
} from '../../constants'

class EditContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.location.state.name,
      contacts: JSON.parse(localStorage.getItem(CONTACTS))
    }
    this.editContact = this.editContact.bind(this)
    this.getContactData = this.getContactData.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
    console.log(JSON.parse(localStorage.getItem(CONTACTS)))
  }

  editContact (e) {
    e.preventDefault()
    let {name, contacts} = this.state
    for (const element of e.target.elements) {
      if (element.id === CONTACT_NAME && element.value !== name) {
        delete contacts[name]
        name = element.value
        contacts[name] = {}
      } else if (element.id) {
        if (element.type === 'checkbox') {
          contacts[name][element.id] = element.checked
        } else {
          contacts[name][element.id] = element.value
        }
      }
    }
    localStorage.setItem(CONTACTS, JSON.stringify(contacts))
    this.setState({
      name,
      contacts
    })
  }

  getContactData (field) {
    const {name, contacts} = this.state
    return contacts[name][field]
  }

  deleteContact () {
    let {name, contacts} = this.state
    delete contacts[name]
    localStorage.setItem(CONTACTS, JSON.stringify(contacts))
    this.setState({
      contacts
    })
  }

  render () {
    const {name} = this.state
    return (
      <div>
        <Menu />
        <h1>Edit Contact</h1>
        <Form onSubmit={this.editContact}>
          <FormGroup>
            <Label>Name</Label>
            <Input type='text' id={CONTACT_NAME} defaultValue={name} />
          </FormGroup>
          <FormGroup>
            <Label>Mobile Number</Label>
            <Input type='text' id={CONTACT_NUMBER} defaultValue={this.getContactData(CONTACT_NUMBER)} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' id={CONTACT_VULNERABLE} defaultChecked={this.getContactData(CONTACT_VULNERABLE)} />{' '}
            Vulnerable
          </Label>
            <Label check>
              <Input type='checkbox' id={CONTACT_DANGER} defaultChecked={this.getContactData(CONTACT_DANGER)} />{' '}
              Danger
          </Label>
          </FormGroup>
          <Button color='primary' size='lg'>Save Changes</Button>{' '}
          <Link to='/contacts'>
            <Button color='secondary' size='lg' onClick={this.deleteContact}>Remove Contact</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default EditContact
