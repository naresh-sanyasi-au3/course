import React from 'react';
import './App.css';
import {connect} from "react-redux";


class App extends React.Component{
  render(){
  return (
    <div>
    <h1>Current Score:{this.props.counter}</h1>
      <button onClick= {this.props.onClickIncreament} className="btn-primary" >UPDATE_BONUS</button>
      <button onClick= {this.props.onClickIncreament1} className="btn-dark">LEVEL_COMPLETED</button>
      <button onClick= {this.props.onClickDecreament} className="btn-danger" >LIFE_LOST</button>
    </div>
  )
}
}
const mapStateToProps = state => {
  return{
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClickIncreament: () => dispatch({type: "INCREMENT", value: 100}),
    onClickIncreament1: () => dispatch({type: "INCREMENT", value: 500}),
    onClickDecreament: () => dispatch({type: "DECREMENT", value: 250})
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
