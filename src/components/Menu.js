import React from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/">Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link to="/profile">Manage Profile</Link>
              </NavItem>
              <NavItem>
                <NavLink href="./components/Contacts">Setup Contacts</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/helplines">Helplines</Link>
              </NavItem>
              <NavItem>
                <NavLink href="./components/Guide">How To Use Guide</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Menu
