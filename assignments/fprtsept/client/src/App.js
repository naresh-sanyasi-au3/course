import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/Form/SignIn/SignIn';
import SignUp from './components/Form/SignUp/SignUp';
import SignOut from './components/signOut/SignOut';
import CreateBlog from './components/createBlog/CreateBlog';


function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signOut" component={SignOut} />
      <Route exact path="/CreateBlog" component={CreateBlog} />
    </React.Fragment>
  );
}

export default App;
