import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './App';
import About from './components/About';
import Contact from './components/Contactus';
const routing = (
    <Router>
        <div>
            <nav className='nav bg-dark text-warning sticky-top p-2'>
                <Link exact activeClassName='active_nav' to='/' className='nav-link font-weight-bold'>Home</Link>
                <Link  activeClassName='active_nav' to='/about' className='nav-link font-weight-bold'>About Us</Link>
                <Link  activeClassName='active_nav' to='/contact' className='nav-link font-weight-bold'>Contact Us</Link>
            </nav>

            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));



