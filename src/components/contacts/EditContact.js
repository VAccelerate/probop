/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'

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
      contacts: JSON.parse(localStorage.getItem(CONTACTS)),
      deleteModal: false,
      edited: false
    }
    this.editContact = this.editContact.bind(this)
    this.getContactData = this.getContactData.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  editContact (e) {
    e.preventDefault()
    let {name, contacts} = this.state
    for (const element of Array.from(e.target.elements)) {
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
      contacts,
      edited: true
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

  toggle () {
    this.setState({
      deleteModal: !this.state.deleteModal
    })
  }

  render () {
    const {name, edited} = this.state
    return (
      <div>
        {edited ? <Redirect to={{
          pathname: '/contacts',
          state: {
            edited: true,
            name
          }
        }} />
        : <div>
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
            <Button color='secondary' size='lg' onClick={this.toggle}>Remove Contact</Button>

          </Form>
          <DeleteModal toggle={this.toggle} modal={this.state.deleteModal} name={name}
            deleteContact={this.deleteContact} />
        </div>
      }
      </div>
    )
  }
}

const DeleteModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody>
        <h1>Are you sure you want to delete {props.name}?</h1>
      </ModalBody>
      <ModalFooter>
        <Link to='/contacts'>
          <Button color='danger' onClick={props.deleteContact}>
            Yes
          </Button>
        </Link>
        <Button color='danger' onClick={props.toggle}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default EditContact
