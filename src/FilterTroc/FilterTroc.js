import React, { Component } from "react";
import "./FilterTroc.css";
import { Container, Row, Col } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class FilterTroc extends Component {
  render() {
    return (
      <form className="filter-container">
        <select className="category-selection row">
          <option value="-1">Offres & Recherches</option>
          <option disabled="">------------------</option>
          <option value="0">Offre</option>
          <option value="1">Recherche</option>
        </select>
        <select className="category-selection row">
          <option value="-1">Biens & Services</option>
          <option disabled="">------------------</option>
          <option value="0">Biens</option>
          <option value="1">Services</option>
        </select>
        <select className="category-selection row">
          <option value="-1">Choisissez une catégorie</option>
          <option disabled="">------------------</option>
          <option value="0">Arts & Spectacles</option>
          <option value="1">Coup de main</option>
          <option value="2">Informatique/Multimédia</option>
          <option value="3">Livre / CD / DVD</option>
          <option value="4">Transport/Véhicules</option>
          <option value="5">Vacances/Week-end</option>
        </select>
        <select className="category-selection row">
          <option value="-1">Toute la Tunisie</option>
          <option disabled="">------------------</option>
          <option value="0">Ariana</option>
          <option value="1">Beja</option>
          <option value="2">Nabeul</option>
          <option value="3">Jendouba</option>
          <option value="4">Medenine</option>
          <option value="5">Tunis</option>
        </select>
      </form>
    );
  }
}
export default FilterTroc;
