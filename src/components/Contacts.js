import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap'
import ManageContacts from './ManageContacts'
import Menu from './Menu'

class Contacts extends Component {

  constructor(props){
    super(props)
      this.state = {manageVisible: false}
      this.toggle = this.toggle.bind(this)
    }

  toggle(){
    this.setState({
      manageVisible: !this.state.manageVisible
    })
  }

  render() {
    return (
      <div>
        <Menu />
        {!this.state.manageVisible ?
          <div>
            <h1>Contacts</h1>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>Pauline Stokes</ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Jeremy Liss</ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Amanda Hogan</ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Zayne Imtiaz</ListGroupItemHeading>
              </ListGroupItem>
            </ListGroup><br></br>
            <Button color="primary" size="lg" onClick={this.toggle}>
              Add Contact
            </Button>
          </div>
          :
          <ManageContacts />
        }
      </div>
    )
  }
}

export default Contacts
