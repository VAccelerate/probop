import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ListContacts extends React.Component {
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
         <FormGroup>
           <Label for="exampleNumber">Number</Label>
           <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
         </FormGroup>
         <FormGroup check>
             <Label check>
               <Input type="checkbox" />{' '}
               Vulnerable
             </Label>
         </FormGroup>
         <FormGroup check>
             <Label check>
               <Input type="checkbox" />{' '}
               Danger
             </Label>
         </FormGroup>
         <Button color="primary" size="lg">Save Changes</Button>{' '}
         <Button color="secondary" size="lg">Remove Contact</Button>
       </Form>
     )
   }
 }
