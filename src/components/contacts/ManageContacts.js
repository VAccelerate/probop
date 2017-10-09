/* global localStorage */
import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CONTACTS } from '../../constants'

class ManageContacts extends Component {
  constructor (props) {
    super(props)
    this.state = {manageVisible: false}
    this.toggle = this.toggle.bind(this)
    this.getContacts = this.getContacts.bind(this)
  }

  toggle () {
    this.setState({
      manageVisible: !this.state.manageVisible
    })
  }

  getContacts () {
    if (localStorage.getItem(CONTACTS)) {
      return Object.keys(JSON.parse(localStorage.getItem(CONTACTS)))
    }
    return []
  }

  render () {
    return (
      <div>
        <div>
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
