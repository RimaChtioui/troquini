import React, { Component } from "react";
import "./FilterTroc.css";
import { Container, Row, Col } from "reactstrap";

class FilterTroc extends Component {
  render() {
    return (
      <div className="filter-container">
        <form className="add-announcement-form">
          <select className="category-selection">
            <option value="Choisissez une catégorie">
              Offres & Recherches
            </option>
            <option value="Coup de main">Offre</option>
            <option value="Coup de main">Recherche</option>
          </select>
          <select className="category-selection">
            <option value="Choisissez une catégorie">Biens & Services</option>
            <option value="Coup de main">Biens</option>
            <option value="Coup de main">Services</option>
          </select>
          <select className="category-selection">
            <option value="Choisissez une catégorie">
              Choisissez une catégorie
            </option>
            <option value="Coup de main">Arts & Spectacles</option>
            <option value="Coup de main">Coup de main</option>
            <option value="Coup de main">Informatique/Multimédia</option>
            <option value="Coup de main">Livre / CD / DVD</option>
            <option value="Coup de main">Transport/Véhicules</option>
            <option value="Coup de main">Vacances/Week-end</option>
          </select>
          <select className="category-selection">
            <option value="Choisissez une catégorie">Toute la Tunisie</option>
            <option value="Coup de main">Ariana</option>
            <option value="Coup de main">Beja</option>
            <option value="Coup de main">Nabeul</option>
            <option value="Coup de main">Jendouba</option>
            <option value="Coup de main">Medenine</option>
            <option value="Coup de main">Tunis</option>
          </select>
          <input
            type="text"
            placeholder="Code postal"
            minlength="4"
            maxlength="4"
            className="input-filter"
          />
        </form>
      </div>
    );
  }
}
export default FilterTroc;
