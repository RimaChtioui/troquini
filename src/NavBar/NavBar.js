import React from "react";
import "./NavBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

library.add(faSearch);

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    let filterObj = {};
    filterObj[name] = value;
    this.props.onFilter(filterObj);
  }
  render() {
    return (
      <NavbarNav className="center">
        <NavItem id="search">
          <div className="searc-container">
            <div className="search">
              <FontAwesomeIcon className="search-icon" icon="search" />
              <input
                id="search_input"
                className="search_input"
                type="search"
                placeholder="Que cherchez-vous ?"
                autoComplete="on"
                value={this.props.filterText}
                name="filterText"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </NavItem>
      </NavbarNav>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,

      isWideEnough: false,
      styler: this.props.navstyle
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <Navbar
              color={this.state.styler}
              dark
              expand="md"
              fixed="top"
              scrolling
            >
              <NavbarBrand href="/">
                <strong>Troquini</strong>
              </NavbarBrand>
              {!this.state.isWideEnough && (
                <NavbarToggler onClick={this.onClick} />
              )}
              <Collapse isOpen={this.state.collapse} navbar className="premier">
                <NavbarNav className="left">
                  <NavItem>
                    <NavLink className="menu item-1" to="/comment-ca-marche">
                      Comment ça marche ?
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/add-troc">
                      Je propose
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/search-troc">
                      Je recherche
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/user-profile">
                      Mon Profil
                    </NavLink>
                  </NavItem>
                </NavbarNav>
                <NavbarNav className="center">
                  <NavItem id="search">
                    <div className="searc-container">
                      <div className="search">
                        <FontAwesomeIcon
                          className="search-icon"
                          icon="search"
                        />
                        <input
                          id="search_input"
                          className="search_input"
                          type="search"
                          placeholder="Que cherchez-vous ?"
                          autoComplete="on"
                        />
                      </div>
                    </div>
                  </NavItem>
                </NavbarNav>
                <NavbarNav className="right">
                  <NavItem className="menu-utilitaires">
                    <button
                      type="button"
                      className="log-button"
                      onClick={this.login}
                    >
                      Connexion
                    </button>
                    <button
                      type="button"
                      className="sign-button"
                      onClick={this.register}
                    >
                      Inscrivez-vous
                    </button>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Navbar>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
