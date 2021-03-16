import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password: ""
        }
    }

    inputChange = (e)=> {
        let name = e.target.name
        this.setState ({
            [name]: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

     let users = this.props.users
         
     if(users.find(user => user.email === (this.state.email)) && users.find(user => user.password === this.state.password)){
        console.log('logged in')

        let user = {
           isLoggedIn: true,
           email: this.state.email,
           password: this.state.password
        }

        localStorage.setItem('user', JSON.stringify(user))
        
        this.props.history.push('/')
     }
    
    }

 render(){
     return(
         <div className="container"> 
             <h3 className="text-center mt-3">Login </h3>
             <hr/>
             <form onSubmit={this.formSubmit}>
             <div  className="row">
                 <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" id="email" onChange={this.inputChange}/>
                 </div>
               </div>
               <div  className="row">
                 <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={this.inputChange}/>
                 </div>
               </div>
                <div className="row ml-5 pl-3">
                <button type="submit" className="btn btn-primary col-md-1 offset-md-5">Submit</button>
                </div>

                <p className="text-center mt-3"> New user? <Link to='/signup'>Signup</Link> here</p>
                </form>
         </div>
     )
 }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login)