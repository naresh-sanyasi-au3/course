import React from 'react';
import { connect } from 'react-redux';
import { CONNECTIONSLIST } from '../shared/connectionsList';
import { Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import CardConnection from './CardConnection';

class Connections extends React.Component {
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
            <span className="fa fa-users"></span> Connections
          </NavLink>
        </Card>
        </div>
        <div className="col-md-8">
        <Card>
          <span style={{
            fontFamily: "sansSerif",
            fontSize: "16px",
            margin: "10px"
          }}>{this.state.connections.length} Connections </span>
          <span></span>
          <hr />
          <CardBody>
            {this.state.connections.map(connection => (
              <CardConnection key={connection.id} connection={connection} />
            ))}
          </CardBody>
        </Card>
        </div>
        </div>
      </div>
    );
  }
}

export default connect()(Connections);