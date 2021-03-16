import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css'; 
import App from './components/App'; 

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={App} />
      </Router>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
