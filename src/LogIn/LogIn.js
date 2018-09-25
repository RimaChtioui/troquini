import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./LogIn.css";

export default class LogIn extends React.Component {
  state = {
    email: "",
    psswd: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="Login">
        <h1 className="pageLOGIN">
          Connectez-vous pour accéder à votre compte
        </h1>
        <div className="email">
          <h6 className="mailadress">Adresse e-mail:</h6>
          <input
            type="email"
            className="inputmail"
            name="email"
            onChange={e => this.change(e)}
            value={this.state.email}
            placeholder="adresse.email@gmail.com"
          />
        </div>
        <div className="password">
          <h6 className="confirmpsd">Mot de passe:</h6>
          <input
            type="password"
            className="inputpssd"
            name="psswd"
            onChange={e => this.change(e)}
            value={this.state.psswd}
            placeholder="mot de passe"
          />
        </div>
        <div className="Connecter">
          <button className="connecter" onClick={e => this.onSubmit(e)}>
            {" "}
            Se connecter
          </button>
        </div>
      </div>
    );
  }
}
