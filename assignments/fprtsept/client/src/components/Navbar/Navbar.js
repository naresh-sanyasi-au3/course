import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('userTokenTime')
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">Blog App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-item nav-link text-white" to="/" exact>Home</Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              {this.state.loggedIn ?
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/createBlog">Create Blog</NavLink>
                  <NavLink className="nav-item nav-link" to="/signOut">Sign Out</NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/signIn">Sign In</NavLink>
                  <NavLink className="nav-item nav-link" to="/signUp">Sign Up</NavLink>
                </React.Fragment>}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;