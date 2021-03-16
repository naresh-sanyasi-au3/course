import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      SignupErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3000/",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("Signup error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container form1">
        <h4>Signup</h4><hr/><br/>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={this.state.FirstName}
            onChange={this.handleChange}
            required
          /><br/><br/>
        <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={this.state.LastName}
            onChange={this.handleChange}
            required
          /><br/><br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          /><br/><br/>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
            required
          /><br/><br/>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          /><br/><br/>

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          /><br/><br/>
          <button className="btn-primary" type="submit">Signup</button>
        </form>
      </div>
    );
  }
}
export default Signup;