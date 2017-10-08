import React from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Dashboard.css'

class Menu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <div className='Menu'>
        <Navbar className='navbar-dark bg-dark'>
          <NavbarBrand className='title'><h4>Dashboard</h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar style={{textAlign: 'right'}}>
              <NavItem className='item'>
                <Link to='/'>Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link to='/profile'>Manage Profile</Link>
              </NavItem>
              <NavItem>
                <Link to='/contacts'>Setup Contacts</Link>
              </NavItem>
              <NavItem>
                <Link to='/helplines'>Helplines</Link>
              </NavItem>
              <NavItem>
                <Link to='/guide'>How To Use Guide</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Menu
