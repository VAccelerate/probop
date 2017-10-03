import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
         <FormGroup>
           <Label for="exampleEmail">Plain Text (Static)</Label>
           <Input plaintext>Some plain text/ static value</Input>
         </FormGroup>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
         </FormGroup>
