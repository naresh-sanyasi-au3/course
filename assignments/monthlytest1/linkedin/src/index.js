import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import { store } from './redux/store';
import Profile from './components/Profile';
import Home from './components/Home';
import Logout from './components/Logout';
import MyNetwork from './components/MyNetwork';
import Connections from './components/Connections';

class LinkedIn extends React.Component {
  doRedirect() {
    let loggedIn = localStorage.getItem('user');
    console.log(loggedIn);
    
    if (loggedIn) {
      return <Redirect to='/' />
    }
    else {
      return <Redirect to='/login' />
    }
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route exact path='/' component={App}></Route>
            <Route path='/login' component={Login}></Route>
            {this.doRedirect()}
            <Route path='/signup' component={Signup}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/logout' component={Logout}></Route>
            <Route path='/mynetwork' component={MyNetwork}></Route>
            <Route path='/connections' component={Connections}></Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<LinkedIn />, document.getElementById('root'));
