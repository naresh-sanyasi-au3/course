import React from "react";

class Input extends React.Component{

    updateValue = (e) => {
        this.props.updateValue(e.target.value);
    }
    render(){
        return (
        <input type="text" placeholder={this.props.placeholder} onChange={this.updateValue} value={this.props.value}></input>
        )
      }
}

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: "" 
        }
    }

    updateValue = (value) => {
        this.setState({
            value: value
        })
    }

    render(){
        return (
            <div className= "form-group">
                <Input placeholder="temperature in celcius" value={this.state.value} updateValue={this.updateValue}/>
                <Input placeholder="temperature in farhenhite" value={this.state.value*1.8+32}/>
            </div>
        );
    }
}

export default App;

