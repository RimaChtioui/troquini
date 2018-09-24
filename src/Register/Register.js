import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Register.css";


 class Register extends React.Component {
  state={

    nom:'',
    prenom:'',
    email: '',
    psswd: '',
    confirmpsswd:'',

  }
  change=e=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  };
  onSubmit= (e)=>{
    e.preventDefault();
     console.log(this.state);
  };
   render() {
    return (
    <div className="create">
    <h1 className="registerpage">Veuillez créer votre compte</h1>
    <div className="nom"> 
        <h6 className="nametitle">Nom:</h6>
        <input type="text" className="inputname" name="nom" onChange={e=>this.change(e)} value= {this.state.nom}
        placeholder="Saisissez votre nom"/>
        </div>
        <div className="prenom"> 
        <h6 className="surnametitle">Prenom:</h6>
        <input type="text" className="inputsurname" name="prenom" onChange={e=>this.change(e)} value= {this.state.prenom}
        placeholder="Saisissez votre prenom"/>
        </div>
       <div className="email"> 
        <h6 className="mailadress">Adresse e-mail:</h6>
        <input type="email" className="inputmail" name="email" onChange={e=>this.change(e)} value= {this.state.email}
        placeholder="adresse.email@gmail.com"/>
        </div>
        <div className="password"> 
        <h6 className="psswd">Mot de passe:</h6>
        <input type="password" className="inputpssd" name="psswd" onChange={e=>this.change(e)} value= {this.state.psswd}
        placeholder="mot de passe"/>
        </div>
        <div className="password"> 
        <h6 className="confirmpsd">Confirmez votre mot de passe:</h6>
        <input type="password" className="inputconfirmpssd" name="confirmpsswd" onChange={e=>this.change(e)} value= {this.state.confirmpsswd}
        placeholder="Confirmez votre mot de passe"/>
        </div>
        <div className="Connecter">
            <button className="creer" onClick={e=>this.onSubmit(e)} type="primary" > Créer</button>
        </div>

      </div>
     
    );
  }
}

export default Register;