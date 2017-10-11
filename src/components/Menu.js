import React from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import './Menu.css'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    window.drift.on('ready', function (api) {
      // hide the widget when it first loads
      api.widget.hide()
    })
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.setCurrentRoute = this.setCurrentRoute.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    document.addEventListener('click', this.handleDocumentClick, true)
    this.state = {
      collapsed: true,
      currentRoute: 'Dashboard'
    }
  }

  handleDocumentClick (e) {
    if (!this.state.collapsed) {
      this.toggleNavbar()
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  setCurrentRoute (route) {
    console.log(route)
    this.setState({
      currentRoute: route
    })
  }

  render () {
    return (
      <div className='Menu' >
        <Navbar className='navbar-dark navbar-fixed-top navbar-absolute navbar-fixed-top'>
          <NavbarBrand className='title'><h4>{ this.state.currentRoute }</h4>
          </NavbarBrand>
          <div className='toggle-container'>
            <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          </div>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar >
              <NavItem className='dashboard' >
                <Link to='/' onClick={() => this.setCurrentRoute('Dashboard')} >Dashboard</Link>
              </NavItem>
              <NavItem className='profile' >
                <Link to='/profile' onClick={() => this.setCurrentRoute('Manage Profile')}>Manage Profile</Link>
              </NavItem>
              <NavItem className='contact'>
                <Link to='/contacts' onClick={() => this.setCurrentRoute('Setup Contacts')}>Manage Contacts</Link>
              </NavItem >
              <NavItem className='help' >
                <Link to='/helplines' onClick={() => this.setCurrentRoute('Helplines')}>Helplines</Link>
              </NavItem>
              <NavItem className='how'>
                <Link to='/guide' onClick={() => this.setCurrentRoute('How To Use Guide')}>How To Use Guide</Link>
              </NavItem>
              <NavItem className='contact'>
                <Link className='drift-open-chat' to='/feedback' >Feedback</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Menu
