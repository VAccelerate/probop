import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="./components/Profile">Manage Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./components/Contacts">Setup Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./components/Helplines">Helplines</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./components/Guide">How To Use Guide</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
