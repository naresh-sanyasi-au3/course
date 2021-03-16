import React from 'react';
import { connect } from 'react-redux';
import { CONNECTIONSLIST } from '../shared/connectionsList';
import { Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';

class MyNetwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: CONNECTIONSLIST,
    }
  }
  

  
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row mt-1">
          <div className="col-md-4">
        <Card>
          <span style={{
            fontFamily: "sansSerif",
            fontSize: "16px",
            margin: "10px"
          }}>Manage my network</span>
          <hr />
          <NavLink className="nav-link" to="/connections">
            <span className = "fa fa-users" > </span> Connections &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"black", display:"flex-row"}}>{this.state.connections.length}</span>
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-handshake-o"></span> Teammates
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-address-book-o"></span> Contacts
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-user-o"></span> People | Follow
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-users"></span> Groups
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-file-text-o"></span> Pages
          </NavLink>
          <NavLink className="nav-link" to="/">
            <span className="fa fa-hashtag"></span> #Hashtags
          </NavLink>
        </Card>
        </div>
        <div className="col-md-8">
        <Card>
          <span style={{
            fontFamily: "sansSerif",
            fontSize: "16px",
            margin: "10px"
          }}>Invitations &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;See all {this.state.connections.length} </span>
          <span></span>
          <hr />
          <CardBody>
            {this.state.connections.map(connection => (
              <Cards key={connection.id} connection={connection} />
            ))}
          </CardBody>
        </Card>
        </div>
        </div>
      </div>
    );
  }
}

export default connect()(MyNetwork);
