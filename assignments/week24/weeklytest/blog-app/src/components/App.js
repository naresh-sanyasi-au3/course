import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './Menu';
import Search from './Search';
import { store } from '../store/store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className="container">
          <div className='row'>
            <div className='col-md-3'>
              <Menu />
            </div>
            <div className='col-md-9'>
                <Route path='/app/search' component={Search} />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
