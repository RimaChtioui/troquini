import React from 'react';
import Dom from 'react-dom';
import "./EditProfile.css";



export default class EditProfile extends React.Component {
  render() {
    return (
      <div className="modify-part">
        
  
         <h2 className="describ-editprof">Ma description</h2>
         <textarea name="message" rows="10" cols="30" className="input-editprof" placeholder="Ce troqueur n'a pas encore rempli sa description.">
         </textarea>
         <button  className="Button">Modifier</button>


        <h2 className="describ-editprof">Ma geolocalisation</h2>
        <div className="inputcodepostal"> 
        <h6 className="codepostaltitle">Code postal:</h6>
        <input type="text" className="inputtitle"></input>
        </div>
        <div className="inputcodepostal"> 
        <h6 className="villetitle">Ville:</h6>
        <input type="text" className="inputtitle"></input>
        </div>
        <div className="inputcodepostal"> 
        <h6 className="numtitle">Numéros:</h6>
        <input type="number" className="inputtitle" min="1" max="1000"></input>
        </div>
        <div className="inputcodepostal"> 
        <h6 className="ruetitle">Rue:</h6>
        <input type="text" className="inputtitle" ></input>
        </div>
        <button  className="Button">Modifier</button>
       

        <h2 className="describ-editprof">Mot de passe</h2>
        <div className="inputcodepostal"> 
        <h6 className="ancienmotpasse">Ancien mot de passe:</h6>
        <input type="text" className="inputtitle"></input>
        </div>
        <div className="inputcodepostal"> 
        <h6 className="newpswd">Nouveau mot de passe:</h6>
        <input type="text" className="inputtitle"></input>
        </div>
        <div className="inputcodepostal"> 
        <h6 className="confirmpsd">Confirmer mot de passe:</h6>
        <input type="number" className="inputtitle" min="1" max="1000"></input>
        </div>
        <button  className="Button">Modifier</button>
        <h2 className="describ-editprof">Parametre du compte</h2>
        <button  className="Button">Modifier</button>

        </div>
      
    );
  }
}
