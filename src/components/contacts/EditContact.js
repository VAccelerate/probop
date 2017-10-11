/* global localStorage */
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'
// eslint-disable-next-line
import { Redirect, withRouter } from 'react-router-dom'
import './EditContact.css'

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
    this.props.history.push('/contacts')
  }

  toggle () {
    this.setState({
      deleteModal: !this.state.deleteModal
    })
  }

  render () {
    const {name, edited} = this.state
    return (
      <div className='Container'>
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
              <Label className='Text'>Name</Label>
              <Input className='Input' type='text' id={CONTACT_NAME} defaultValue={name} />
            </FormGroup>
            <FormGroup>
              <Label className='Text'>Mobile Number</Label>
              <Input className='Input' type='text' id={CONTACT_NUMBER} defaultValue={this.getContactData(CONTACT_NUMBER)} />
            </FormGroup>
            <FormGroup check>
              <h6 className='Text'> Contact this person when I am </h6>
              <Label check className='Text Danger'>
                <Input className='Checkbox' type='checkbox' id={CONTACT_VULNERABLE} defaultChecked={this.getContactData(CONTACT_VULNERABLE)} />{' '}
              Unsafe
            </Label>
              <Label check className='Text'>
                <Input className='Checkbox' type='checkbox' id={CONTACT_DANGER} defaultChecked={this.getContactData(CONTACT_DANGER)} />{' '}
                In Danger
            </Label>
            </FormGroup>
            <Button className='SaveButton' block>Save changes</Button>{' '}
            <Button className='RemoveButton' onClick={this.toggle}block>Remove emergency contact</Button>

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
    <Modal className='Modal' isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody>
        <h1 className='ModalText'>Are you sure you want to delete {props.name}?</h1>
      </ModalBody>
      <ModalFooter style={{border: 0}}>
        <Button className='YesButton' onClick={props.deleteContact}>
          Yes
        </Button>
        <Button className='NoButton' onClick={props.toggle}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default EditContact
