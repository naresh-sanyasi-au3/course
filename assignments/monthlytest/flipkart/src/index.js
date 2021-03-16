import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/Signup';
import * as serviceWorker from './serviceWorker';

export default class Home extends React.Component {

    doRedirect(){
        let loggedIn = localStorage.getItem("user");

        if(loggedIn){
            return <Redirect to="/app/trending"/>;
        }
        else{
            return <Redirect to="/login"/>;
        }
    }

    render(){
        return (
            <link>
            <Router>
                
                <Route path="/app" component={App}/>
                <Route path="/login" component={Login}/>
                {/* Declarative Routing */}
                {this.doRedirect()}
            </Router>
            </link>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();