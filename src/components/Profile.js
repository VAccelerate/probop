/* global localStorage */
import React, { Component } from 'react'
// eslint-disable-next-line
import { withRouter } from 'react-router-dom'
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
import './Profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
    this.getProfileData = this.getProfileData.bind(this)
  }

  componentDidMount () {
    if (localStorage.getItem(PROFILE)) {
      let genders = document.getElementsByName('gender')
      genders.forEach((gender) => {
        if (gender.value === JSON.parse(localStorage.getItem(PROFILE))[PROFILE_GENDER]) {
          gender.checked = true
        }
      })
    }
  }

  onSubmit (e) {
    e.preventDefault()
    let profile = {}
    for (const element of Array.from(e.target.elements)) {
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

    if (JSON.parse(localStorage.getItem('firstRun'))) {
      this.props.history.push('/contacts')
    }
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
      <div className='Container'>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <div className='TextBlock'>
              <Label for='name' className='Text'>Name</Label>
              <Input type='text' className='block' name='name' id={PROFILE_NAME} defaultValue={this.getProfileData(PROFILE_NAME)} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for='DOB' className='Text'>D.O.B</Label>
            <Input type='date' className='block' name='date' id={PROFILE_DOB} defaultValue={this.getProfileData(PROFILE_DOB)} />
          </FormGroup>

          <FormGroup tag='fieldset'>
            <Label for='gender' className='genderText'>Gender</Label>
            <div className='radioGroup'>
              <div className='wrap'>
                <FormGroup check>
                  <Input type='radio' name='gender' value='Male' />{' '}
                  <Label check>
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input type='radio' name='gender' value='Trans' />{' '}
                  <Label check>
                    Trans
                  </Label>
                </FormGroup>
              </div>
              <div className='wrap'>
                <FormGroup check>
                  <Input type='radio' name='gender' value='Female' />{' '}
                  <Label check>
                  Female
                </Label>
                </FormGroup>
                <FormGroup check>
                  <Input type='radio' name='gender' value='Other' />{' '}
                  <Label check>
                  Other
                </Label>
                </FormGroup>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className='TextBlock'>
              <Label for='mobile' className='Text'>Mobile</Label>
              <Input type='text' className='block' name='mobile' id={PROFILE_MOBILE} placeholder='Mobile' defaultValue={this.getProfileData(PROFILE_MOBILE)} />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='TextBlock'>
              <Label for='email' className='Text'>Email</Label>
              <Input type='email' className='block' name='email' id={PROFILE_EMAIL} placeholder='Email' defaultValue={this.getProfileData(PROFILE_EMAIL)} />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='TextBlock'>
              <Label for='ethnicity' className='Text'>Ethnicity</Label>
              <Input type='select' className='blockTwo' name='ethnicity' id={PROFILE_ETHNICITY} placeholder='Select one' defaultValue={this.getProfileData(PROFILE_ETHNICITY)} >
                <option>Select one</option>
                <option>Asian</option>
                <option>M&#257;ori</option>
                <option>Pakeha/NZ European</option>
                <option>Pasifika</option>
                <option>Other</option>
              </Input>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for='Address' className='Text'>Home address</Label>
            <Input type='text' className='address1' name='address1' id={PROFILE_ADRS1} placeholder='Address Line 1' defaultValue={this.getProfileData(PROFILE_ADRS1)} />
            <Input type='text' className='address1' name='address2' id={PROFILE_ADRS2} placeholder='Address Line 2' defaultValue={this.getProfileData(PROFILE_ADRS2)} />
            <Input type='text' className='address1' name='city' id={PROFILE_CITY} placeholder='City' defaultValue={this.getProfileData(PROFILE_CITY)} />
          </FormGroup>
          <FormGroup>
            <Label for='OtherAddress' className='Text'>Other address (e.g.friends house)</Label>
            <Input type='text' className='address1' name='address1' id={PROFILE_OTHERADRS1} placeholder='Address Line 1' defaultValue={this.getProfileData(PROFILE_OTHERADRS1)} />
            <Input type='text' className='address1' name='address2' id={PROFILE_OTHERADRS2} placeholder='Address Line 2' defaultValue={this.getProfileData(PROFILE_OTHERADRS2)} />
            <Input type='text' className='address1' name='city' id={PROFILE_OTHERCITY} placeholder='City' defaultValue={this.getProfileData(PROFILE_OTHERCITY)} />
          </FormGroup>
          { JSON.parse(localStorage.getItem('firstRun'))
          ? <FormGroup>
            <Button type='submit' className='Button' block>Next</Button>
          </FormGroup>
          : <FormGroup check>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button className='AddButton' block>Submit</Button>
            </Col>
          </FormGroup>
          }
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} autoFocus={false} backdrop='static' className='Modal'>
          <ModalBody>
            <h1 className='ModalText'>Profile Updated Successfully</h1>
          </ModalBody>
          <ModalFooter>
            <Button className='OkButton' color='success' onClick={this.toggle}>
            OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Profile
