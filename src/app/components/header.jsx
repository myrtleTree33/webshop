import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  Glyphicon
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import splashImg from '../img/splash.jpg';

import './header.scss';

// const styles = {
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#1f1f1f'
//   },
//   title: {
//     flex: 1,
//     fontSize: '1.5rem',
//     margin: '1rem'
//   },
//   date: {
//     flex: 1,
//     textAlign: 'right',
//     margin: '1rem',
//     color: 'white'
//   }
// };

export class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: 2
    };
  }

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                SG Trains
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey={this.state.activeKey}>
              <LinkContainer to="/sell/engines">
                <NavItem eventKey={1}>
                  Engines
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/sell/carriages">
                <NavItem eventKey={2}>
                  Carriages
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/sell/accessories">
                <NavItem eventKey={3}>
                  Accessories
                </NavItem>
              </LinkContainer>
              <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={4.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/account">
                <NavItem eventKey={4} href="#">
                  <Glyphicon glyph="user"/>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/cart">
                <NavItem eventKey={4} href="#">
                  <Glyphicon glyph="shopping-cart"/>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="splash-img"></div>
      </header>
    );
  }
}
