import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
          currentDesignation: "",
          profilePicture: "",
          formValidation : {
            isFirstnameValid: true,
            isLastnameValid: true,
            isEmailValid: true,
            isMobileValid: true,
            isPasswordValid: true,
            isConfirmPasswordValid: true,
            isCurrentDesignation: true,
            isProfilePicture: false,
            isFormValid: true
          }
      }
    }

    inputChange = (e)=> {
      let name = e.target.name
      this.setState ({
          [name]: e.target.value
      })
    }

    validateForm = () => {
        let newFormValid = {
            isFirstnameValid: true,
            isLastnameValid: true,
            isEmailValid: true,
            isMobileValid: true,
            isPasswordValid: true,
            isConfirmPasswordValid: true,
            isCurrentDesignationValid: true,
            isProfilePicture: false,
            isFormValid: true,
        }

        if(!this.state.firstname){
            newFormValid.isFirstnameValid = false
            newFormValid.isFormValid = false
        }
        if(!this.state.lastname){
            newFormValid.isLastnameValid = false
            newFormValid.isFormValid = false
        }
        if(!this.state.email){
            newFormValid.isEmailValid = false
            newFormValid.isFormValid = false
        }
        if(!this.state.mobile || this.state.mobile.length > 10 || this.state.mobile.length < 10){
            newFormValid.isMobileValid = false
            newFormValid.isFormValid = false
        }
        if(!this.state.password){
            newFormValid.isPasswordValid = false
            newFormValid.isFormValid = false
        }
        if(!this.state.confirmPassword || this.state.password !== this.state.confirmPassword){
            newFormValid.isConfirmPasswordValid = false
            newFormValid.isFormValid = false
        }
        if(!this.currentDesignation){
          newFormValid.isCurrentDesignationValid = false
          newFormValid.isCurrentDesignationValid = false
        }

        this.setState({
            formValidation: newFormValid
        })
        return newFormValid.isFormValid
    }

    formSubmit = (e) => {
        e.preventDefault()

        if(!this.validateForm())
        return;

        else{
            this.props.dispatch({
                type:'USERS_LIST',
                data: {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    mobile: this.state.mobile,
                    password: this.state.password,
                    currentDesignation: this.state.currentDesignation,
                    profilePicture: this.state.profilePicture,               
                }
            })

            this.props.history.push('/login')
        }
     
    }
    
    render(){
        return (
            <div className="container">
              <h3 className="text-center mt-3">Signup </h3>
              <hr/>
              <form onSubmit={this.formSubmit}>
              {
                !this.state.formValidation.isFormValid && <div className="text-danger text-center">Form is invalid</div>
              }
                <div className="row">
                    <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="firstname">First Name</label>
                    <input type="text" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`} name="firstname" id="firstname" onChange={this.inputChange}/>
                    </div>
                </div>
               
               <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                <label htmlfor="lastname">Last Name</label>
                <input type="text" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`} name="lastname" id="lastname" onChange={this.inputChange}/>
                </div>
               </div>
               
               <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="mobile">Mobile</label>
                    <input type="text" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`}  name="mobile" id="mobile" onChange={this.inputChange}/>
                </div>
                </div>

               <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="email">Email address</label>
                    <input type="email" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`}  name="email" id="email" onChange={this.inputChange}/>
                </div>
                </div>
              
                <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="password">Password</label>
                    <input type="password" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`}  name="password" id="password" onChange={this.inputChange}/>
                </div>
                </div>
              
                <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="confirmPassword">Confirm Password</label>
                    <input type="password" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`}  name="confirmPassword" id="confirmPassword" onChange={this.inputChange}/>
                </div>
                </div>

                <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="currentDesignation">Current Designation</label>
                    <input type="text" className={`form-control ${!this.state.formValidation.isFormValid && 'is-invalid'}`}  name="currentDesignation" id="currentDesignation" onChange={this.inputChange}/>
                </div>
                </div>

                <div className="row">
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlfor="profilePicture">Profile Picture(optional)</label>
                    <input type="file" name="profilePicture" id="profilePicture" onChange={this.inputChange}/>
                </div>
                </div>
               
                <div className="row ml-5 pl-3">
                <button type="submit" className="btn btn-primary col-md-1 offset-md-5">Submit</button>
                </div>         

                <p className="text-center mt-3"> Already have an account? <Link to='/login'>Login</Link> here</p>
          
             </form>
            </div>
          );
    }
 
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(Signup);