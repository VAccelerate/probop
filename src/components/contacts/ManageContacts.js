/* global localStorage */
import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

// import Menu from '../Menu'
import { CONTACTS } from '../../constants'

class ManageContacts extends Component {
  constructor (props) {
    super(props)
    let contactAdded = false
    let contactEdited = false
    let name = ''
    if (this.props.location.state) {
      contactAdded = this.props.location.state.added || false
      contactEdited = this.props.location.state.edited || false
      name = this.props.location.state.name || ''
    }
    this.state = {
      contactAdded,
      contactEdited,
      name
    }
    this.toggle = this.toggle.bind(this)
    this.getContacts = this.getContacts.bind(this)
  }

  toggle () {
    this.setState({
      contactAdded: false,
      contactEdited: false
    })
  }

  getContacts () {
    if (localStorage.getItem(CONTACTS)) {
      return Object.keys(JSON.parse(localStorage.getItem(CONTACTS)))
    }
    return []
  }

  render () {
    const {contactAdded, contactEdited, name} = this.state
    return (
      <div>
        <Menu />
        <div>
          <br />
          <br />
          <br />
          <Alert color='dark' isOpen={contactAdded} toggle={this.toggle}>
            Done! {name} was added to your contact list
          </Alert >
          <Alert color='dark' isOpen={contactEdited} toggle={this.toggle}>
            Great! {name} was updated
          </Alert >
          <ListGroup>
            {
              this.getContacts().map(id =>
                <ListGroupItem key={id} >
                  <Link to={{
                    pathname: '/contacts/edit-contact',
                    state: {name: id}
                  }} >{id}</Link>
                </ListGroupItem>
              )
            }
          </ListGroup><br />
          <Link to='/contacts/add-contact'>
            <Button color='primary' size='lg'>Add Contact</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ManageContacts
