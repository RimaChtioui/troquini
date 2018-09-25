import React from "react";
import Dom from "react-dom";
import "./EditProfile.css";

export default class EditProfile extends React.Component {
  state = {
    messages: "",
    nom: "",
    prenom: "",
    ville: "",
    codepostal: "",
    pseudo: "",
    motpasse: ""
  };
  render() {
    return (
      <div className="modify-part">
        <button className="Button" onClick={this.onSubmit}>
          Modifier
        </button>
        <h2 className="describ-editprof">Ma description</h2>
        <textarea
          name="message"
          rows="10"
          cols="30"
          className="input-editprof"
          placeholder="Ce troqueur n'a pas encore rempli sa description."
        />

        <div className="nom">
          <h6 className="nametitle">Nom:</h6>
          <input
            type="text"
            className="inputname"
            name="nom"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
        <div className="nom">
          <h6 className="nametitle">Prénom:</h6>
          <input
            type="text"
            className="inputname"
            name="prenom"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
        <div className="nom">
          <h6 className="nametitle">Ville:</h6>
          <input
            type="text"
            className="inputname"
            name="ville"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
        <div className="nom">
          <h6 className="nametitle">Code postal:</h6>
          <input
            type="text"
            className="inputname"
            name="codepostal"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
        <div className="nom">
          <h6 className="nametitle">Pseudo:</h6>
          <input
            type="text"
            className="inputname"
            name="pseudo"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
        <div className="nom">
          <h6 className="nametitle">Mot de passe:</h6>
          <input
            type="text"
            className="inputname"
            name="motpasse"
            onChange={this.handleChange}
            placeholder="Saisissez votre nom"
            required
          />
        </div>
      </div>
    );
  }
}
