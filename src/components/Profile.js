import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <h1>Profile</h1>
        <FormGroup>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="DOB" sm={2}>Date of birth</Label>
          <Input type="date" name="date" id="date" />
        </FormGroup>
        <FormGroup>
          <Label for="mobile" sm={2}>Mobile Number</Label>
          <Input type="number" name="mobile" id="mobile" placeholder="Mobile" />
        </FormGroup>
        <FormGroup>
          <Label for="email" sm={2}>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Address" sm={2}>Address</Label>
          <Input type="text" name="address1" id="address1" placeholder="Address Line 1" />
          <Input type="text" name="address2" id="address2" placeholder="Address Line 2"/>
          <Input type="text" name="city" id="city" placeholder="City" />
        </FormGroup>
        <FormGroup>
          <Label for="Ethnicity" sm={2}>Ethnicity</Label>
          <Input type="select" name="ethnicity" id="ethnicity" >
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
    );
  }
}
