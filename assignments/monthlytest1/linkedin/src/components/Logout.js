import React from 'react';

class Logout extends React.Component {

  componentDidMount() {
    localStorage.clear();

    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="container">
        <h2>Logout</h2>
      </div>
    );
  }
}

export default Logout;