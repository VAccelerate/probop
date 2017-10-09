/* global localStorage */
import React, { Component } from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import {
  PROFILE_NAME,
  PROFILE_DOB,
  PROFILE_EMAIL,
  PROFILE_MOBILE,
  PROFILE_ADRS1,
  PROFILE_ADRS2,
  PROFILE_CITY,
  PROFILE_ETHNICITY
} from '../constants'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    for (const element of e.target.elements) {
      localStorage.setItem(element.id, element.value)
    }
    this.toggle()
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <h1>Profile</h1>
          <FormGroup>
            <Label for='name' sm={2}>Name</Label>
            <Input type='text' name='name' id={PROFILE_NAME} defaultValue={localStorage.getItem(PROFILE_NAME)} />
          </FormGroup>
          <FormGroup>
            <Label for='DOB' sm={2}>Date of birth</Label>
            <Input type='date' name='date' id={PROFILE_DOB} defaultValue={localStorage.getItem(PROFILE_DOB)} />
          </FormGroup>
          <FormGroup>
            <Label for='mobile' sm={2}>Mobile Number</Label>
            <Input type='text' name='mobile' id={PROFILE_MOBILE} placeholder='Mobile' defaultValue={localStorage.getItem(PROFILE_MOBILE)} />
          </FormGroup>
          <FormGroup>
            <Label for='email' sm={2}>Email</Label>
            <Input type='email' name='email' id={PROFILE_EMAIL} placeholder='Email' defaultValue={localStorage.getItem(PROFILE_EMAIL)} />
          </FormGroup>
          <FormGroup>
            <Label for='Address' sm={2}>Address</Label>
            <Input type='text' name='address1' id={PROFILE_ADRS1} placeholder='Address Line 1' defaultValue={localStorage.getItem(PROFILE_ADRS1)} />
            <Input type='text' name='address2' id={PROFILE_ADRS2} placeholder='Address Line 2' defaultValue={localStorage.getItem(PROFILE_ADRS2)} />
            <Input type='text' name='city' id={PROFILE_CITY} placeholder='City' defaultValue={localStorage.getItem(PROFILE_CITY)} />
          </FormGroup>
          <FormGroup>
            <Label for='ethnicity' sm={2}>Ethnicity</Label>
            <Input type='select' name='ethnicity' id={PROFILE_ETHNICITY} defaultValue={localStorage.getItem(PROFILE_ETHNICITY)} >
              <option>Maori</option>
              <option>Pakeha/NZ European</option>
              <option>Pasifika</option>
              <option>...</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} autoFocus={false} backdrop='static'>
          <ModalBody>
            <h1>Profile Updated Successfully</h1>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.toggle}>
            OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Profile
