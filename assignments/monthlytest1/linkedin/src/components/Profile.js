import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      currentDesignation: "",
      profilePicture: "",
      formValidation: {
        isFirstnameValid: true,
        isLastnameValid: true,
        isMobileValid: true,
        isPasswordValid: true,
        isConfmPassValid: true,
        isFormValid: true,
        isCurrentDesignation: true,
      }
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

 validateForm = () => {
   let newFormValid = {
     isFirstnameValid: true,
     isLastnameValid: true,
     isMobileValid: true,
     isPasswordValid: true,
     isConfmPassValid: true,
     isCurrentDesignation: true,
     isFormValid: true
   };

   if (!this.state.firstname) {
     newFormValid.isFirstnameValid = false
     newFormValid.isFormValid = false
   }
   if (!this.state.lastname) {
     newFormValid.isLastnameValid = false
     newFormValid.isFormValid = false
   }
   if (!this.state.mobile || this.state.mobile.length !== 10) {
     newFormValid.isMobileValid = false
     newFormValid.isFormValid = false
   }
   if (!this.state.password) {
     newFormValid.isPasswordValid = false
     newFormValid.isFormValid = false
   }
   if (!this.state.confirmPassword || this.state.password !== this.state.confirmPassword) {
     newFormValid.isConfmPassValid = false
     newFormValid.isFormValid = false
   }
   if (!this.state.currentDesignation) {
     newFormValid.isCurrentDesignation = false
     newFormValid.isFormValid = false
   }

   this.setState({
     formValidation: newFormValid
   })
   return newFormValid.isFormValid
 }

 handleSubmit = (event) => {
   event.preventDefault();

   if(!this.validateForm())
    return;
  
   else {
     this.props.dispatch({
       type: 'USERS_LIST_UPDATE',
       data: {
         firstname: this.state.firstname,
         lastname: this.state.lastname,
         mobile: this.state.mobile,
         password: this.state.password,
         currentDesignation: this.state.currentDesignation,
         profilePicture: this.state.profilePicture,
       }
     })
     window.alert('Profile has been Updated successfully');
   } 
 }

 render() {
   var arr = JSON.parse(localStorage.getItem('user'));
   var userEmail = arr.email;

   return (
     <div>
       <Header />
       <h5 className="text-center mt-3">Update Profile</h5>
       <hr />
       <form onSubmit={this.handleSubmit}>
         {!this.state.formValidation.isFormValid && (
            <div className="text-danger text-center">Form is invalid</div>
          )}
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className={`form-control ${!this.state.formValidation
                  .isFormValid && "is-invalid"}`}
                name="firstname"
                id="firstname"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className={`form-control ${!this.state.formValidation
                  .isFormValid && "is-invalid"}`}
                name="lastname"
                id="lastname"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${!this.state.formValidation
                  .isFormValid && "is-invalid"}`}
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${!this.state.formValidation
                  .isFormValid && "is-invalid"}`}
                name="confirmPassword"
                id="confirmPassword"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="currentDesignation">Current Designation</label>
              <input
                type="text"
                className={`form-control ${!this.state.formValidation
                  .isFormValid && "is-invalid"}`}
                name="currentDesignation"
                id="currentDesignation"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
              <label htmlFor="profilePicture">Upload Profile Picture(optional)</label>
              <input
                type="file"
                name="firstname"
                id="firstname"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 offset-md-4">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={userEmail} className="form-control" id="email" disabled/>
            </div>
          </div>
          <div className="row ml-5 pl-3">
            <button
              type="submit"
              className="btn btn-primary col-md-1 offset-md-5"
            >
              Submit
            </button>
          </div>
       </form>
     </div>
   );
 }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Profile);