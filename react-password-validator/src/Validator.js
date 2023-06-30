import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  constructor() {
  super()
this.state = {
  email: "",
  password: "",
  passwordConfirm: "",
  valid: true,
    };
  

//binding method consturctor  

 this.handlePassword = this.handlePassword.bind(this);
 this.handlepasswordConfirm = this.handlepasswordConfirm.bind(this);
 this.handlePasswordMatch = this.handlePasswordMatch.bind(this);

  }

// Handling events
handlePassword(e) {
  this.setState({password: e.target.value});
}

handlepasswordConfirm(e) {
  this.setState({passwordConfirm: e.target.value});
 }


handlePasswordMatch() {
if (this.state.password === this.state.passwordConfirm) {
  this.setState({ vaild: true})
 alert("Passwords match!")
} else {
  this.setState({vaild: false}) 
 alert("Passwords do not match!")
  }
}





render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
         <input type="password" onChange={this.handlePassword} placeholder="password" />
         <input type= "password" onChange={this.handlepasswordConfirm} placeholder="passwordConfirm" />
        <button type="button" onClick={this.handlePasswordMatch}>Submit</button>
        
      </div>
        );
      }
    } 
  


export default Validator;
