import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

//ListGroup AND ListGroupItem does not exist but are required.

export default class Contacts extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem disabled tag="a" href="#">Jeremy</ListGroupItem>
        <ListGroupItem tag="a" href="#">Pauline</ListGroupItem>
        <ListGroupItem tag="a" href="#">Zayne</ListGroupItem>
        <ListGroupItem tag="a" href="#">Damon</ListGroupItem>
        <ListGroupItem tag="a" href="#">BopSass</ListGroupItem>
      </ListGroup>
    );
  }
}
