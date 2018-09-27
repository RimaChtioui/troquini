import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LogIn.css";
import axios from "axios";

class LogIn extends React.Component {
  onLogin = () => {
    axios
      .post("/connect-user", { ...this.state })
      .then(res => {
        res.data.length === 0
          ? alert("Please to check your password or email")
          : alert(`Hello User ${res.data[0].pseudo}`);
      })
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="login-container">
        <div>
          <label> Email </label>
          <input name="email" onChange={this.onChange} />
        </div>
        <div>
          <label> Password </label>
          <input name="password" onChange={this.onChange} />
        </div>
        <button onClick={this.onLogin}> Log In </button>
      </div>
    );
  }
}

export default LogIn;
