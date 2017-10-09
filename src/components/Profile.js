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

import Menu from './Menu'
import {
  PROFILE,
  PROFILE_NAME,
  PROFILE_DOB,
  PROFILE_GENDER,
  PROFILE_EMAIL,
  PROFILE_MOBILE,
  PROFILE_ADRS1,
  PROFILE_ADRS2,
  PROFILE_CITY,
  PROFILE_ETHNICITY,
  PROFILE_OTHERADRS1,
  PROFILE_OTHERADRS2,
  PROFILE_OTHERCITY
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

  componentDidMount () {
    if (localStorage.getItem(PROFILE)) {
      let genders = document.getElementsByName('gender')
      genders.forEach((gender) => {
        if (gender.value === JSON.parse(localStorage.getItem(PROFILE))['profileGender']) {
          gender.checked = true
        }
      })
    }
  }

  onSubmit (e) {
    e.preventDefault()

    let profile = {}
    for (const element of e.target.elements) {
      if (element.name === 'gender' && element.checked) {
        profile[PROFILE_GENDER] = element.value
      }
    // To avoid trailing empty id to be added to object
      if (element.id) {
        profile[element.id] = element.value
      }
    }
    localStorage.setItem(PROFILE, JSON.stringify(profile))
    this.toggle()
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  getProfileData (id) {
    if (JSON.parse(localStorage.getItem(PROFILE))) {
      return (JSON.parse(localStorage.getItem(PROFILE)))[id]
    }
  }

  render () {
    return (
      <div>
        <Menu />
        <Form onSubmit={this.onSubmit}>
          <h1>Profile</h1>
          <FormGroup>
            <Label for='name' sm={2}>Name</Label>
            <Input type='text' name='name' id={PROFILE_NAME} defaultValue={this.getProfileData(PROFILE_NAME)} />
          </FormGroup>
          <FormGroup>
            <Label for='DOB' sm={2}>Date of birth</Label>
            <Input type='date' name='date' id={PROFILE_DOB} defaultValue={this.getProfileData(PROFILE_DOB)} />
          </FormGroup>
          <FormGroup tag='fieldset' >
            <Label for='gender' sm={2}>Gender</Label>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='gender' value='Male' />{' '}
                 Male
               </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='gender' value='Female' />{' '}
                 Female
               </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='gender' value='Trans' />{' '}
                 Trans
               </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='gender' value='Other' />{' '}
                 Other
               </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for='ethnicity' sm={2}>Ethnicity</Label>
            <Input type='select' name='ethnicity' id={PROFILE_ETHNICITY} defaultValue={this.getProfileData(PROFILE_ETHNICITY)} >
              <option>Asian</option>
              <option>M&#257;ori</option>
              <option>Pakeha/NZ European</option>
              <option>Pasifika</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='mobile' sm={2}>Mobile Number</Label>
            <Input type='text' name='mobile' id={PROFILE_MOBILE} placeholder='Mobile' defaultValue={this.getProfileData(PROFILE_MOBILE)} />
          </FormGroup>
          <FormGroup>
            <Label for='email' sm={2}>Email</Label>
            <Input type='email' name='email' id={PROFILE_EMAIL} placeholder='Email' defaultValue={this.getProfileData(PROFILE_EMAIL)} />
          </FormGroup>
          <FormGroup>
            <Label for='Address' sm={2}>Address</Label>
            <Input type='text' name='address1' id={PROFILE_ADRS1} placeholder='Address Line 1' defaultValue={this.getProfileData(PROFILE_ADRS1)} />
            <Input type='text' name='address2' id={PROFILE_ADRS2} placeholder='Address Line 2' defaultValue={this.getProfileData(PROFILE_ADRS2)} />
            <Input type='text' name='city' id={PROFILE_CITY} placeholder='City' defaultValue={this.getProfileData(PROFILE_CITY)} />
          </FormGroup>
          <FormGroup>
            <Label for='OtherAddress' sm={2}>Other most frequent address</Label>
            <Input type='text' name='address1' id={PROFILE_OTHERADRS1} placeholder='Address Line 1' defaultValue={this.getProfileData(PROFILE_OTHERADRS1)} />
            <Input type='text' name='address2' id={PROFILE_OTHERADRS2} placeholder='Address Line 2' defaultValue={this.getProfileData(PROFILE_OTHERADRS2)} />
            <Input type='text' name='city' id={PROFILE_OTHERCITY} placeholder='City' defaultValue={this.getProfileData(PROFILE_OTHERCITY)} />
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
