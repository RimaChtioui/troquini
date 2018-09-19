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
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

library.add(faSearch);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
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
          <Router>
            <div>
              <img src="/back1.jpg" style={{ width: "100%" }} alt="nav-back" />
              <Navbar
                color="transparent"
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
                <Collapse isOpen={this.state.collapse} navbar>
                  <NavbarNav right className="bande-haut">
                    <div className="menu-utilitaires">
                      <button type="button" className="log-button">
                        Connexion
                      </button>
                      <button type="button" className="sign-button">
                        Inscrivez-vous
                      </button>
                    </div>
                  </NavbarNav>
                  <NavbarNav left>
                    <NavItem>
                      <NavLink className="menu" to="#">
                        Comment ça marche ?
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="menu" to="#">
                        Je propose
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="menu" to="#">
                        Je recherche
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="menu" to="#">
                        Mon Profil
                      </NavLink>
                    </NavItem>
                    <div id="search">
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
                            autocomplete="off"
                          />
                        </div>
                        <div className="search-area">
                          <div className="areasearch" style={{}}>
                            <a href="#" className="block-link">
                              <span className="search-matched" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavbarNav>
                </Collapse>
              </Navbar>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default NavBar;
