import React from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../store/store';

class SearchComponent extends React.Component {
  
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_BLOGS'
    })
  }

  render() {
    return ( 
      <div className='container'>
          <h3 className='text-primary mt-2'>Data in Console</h3> 
        <hr />
      </div>
    )
        }
}


let Search = connect(stateMapper)(SearchComponent);
export default Search;