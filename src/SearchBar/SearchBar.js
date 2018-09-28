import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    console.log(this.props.inputReader);
    return (
      <form id="search-input" className="search-form">
        <input
          className="search-section"
          type="text"
          name="searchInput"
          placeholder="Tapez votre recherche ici"
          onChange={this.porps.inputReader}
        />
      </form>
    );
  }
}
export default SearchBar;
