import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ManageContacts extends Component {
  render() {
    return (
      <div>
        <h1>Manage Contacts</h1>
        <Form>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="name" name="name" id="exampleName" placeholder="place name" />
          </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Mobile Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="mobile number here" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Vulnerable
          </Label>
          <Label check>
            <Input type="checkbox" />{' '}
              Danger
          </Label>
        </FormGroup>
          <Button color="primary" size="lg">Save Changes</Button>{' '}
          <Button color="secondary" size="lg">Remove Contact</Button>
        </Form>
      </div>
    )
  }
}

export default ManageContacts
