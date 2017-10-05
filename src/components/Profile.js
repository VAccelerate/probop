/* global localStorage */
import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import Menu from './Menu'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitted: false,
      name: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    localStorage.setItem('profileName', e.target.elements[0].value)
    localStorage.setItem('profileDOB', e.target.elements[1].value)
    localStorage.setItem('profileMobile', e.target.elements[2].value)
    localStorage.setItem('profileEmail', e.target.elements[3].value)
  }

  // componentDidMount(){
  //   alert(this.refs.name.value)
  // }

  render () {
    return (
      <div>
        <Menu />
        <Form onSubmit={this.onSubmit}>
          <h1>Profile</h1>
          <FormGroup>
            <Label for='name' sm={2}>Name</Label>
            <Input type='text' id='name' name='name' value='tesfsxt' />
          </FormGroup>
          <FormGroup>
            <Label for='DOB' sm={2}>Date of birth</Label>
            <Input type='date' name='date' id='date' />
          </FormGroup>
          <FormGroup>
            <Label for='mobile' sm={2}>Mobile Number</Label>
            <Input type='text' name='mobile' id='mobile' placeholder='Mobile' />
          </FormGroup>
          <FormGroup>
            <Label for='email' sm={2}>Email</Label>
            <Input type='email' name='email' id='email' placeholder='Email' />
          </FormGroup>
          <FormGroup>
            <Label for='Address' sm={2}>Address</Label>
            <Input type='text' name='address1' id='address1' placeholder='Address Line 1' />
            <Input type='text' name='address2' id='address2' placeholder='Address Line 2' />
            <Input type='text' name='city' id='city' placeholder='City' />
          </FormGroup>
          <FormGroup>
            <Label for='Ethnicity' sm={2}>Ethnicity</Label>
            <Input type='select' name='ethnicity' id='ethnicity' >
              <option>Maori</option>
              <option>Pakeha/NZ European</option>
              <option>Pasifika</option>
              <option>...</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Next</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Profile
