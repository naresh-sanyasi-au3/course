import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isNavOpen: false,
    }
  }
  
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.setState.isNavOpen,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="success" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/home">
              <img src="assets/images/logo.png" width="40" height="35" alt="LinkedIn" /> &nbsp;
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <form className="form-inline form-group my-2 my-lg=0 search">
                    <input 
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </NavItem>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/mynetwork">
                    <span className="fa fa-users"></span> My Network
                  </NavLink>
                </NavItem>
                &nbsp; &nbsp;
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-briefcase"></span> Jobs
                  </NavLink>
                </NavItem>
                &nbsp; &nbsp;
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-envelope"></span> Messaging
                  </NavLink>
                </NavItem>
                &nbsp; &nbsp;
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-bell-o"></span> Notifications
                  </NavLink>
                </NavItem>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Me
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink className="nav-link" to="/logout">
                        Signout
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
