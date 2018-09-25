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
import { Link } from "react-router-dom";

library.add(faSearch);

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
                
                <NavbarNav className="right">
                  <NavItem className="menu-utilitaires">
                    <button type="button" className="log-button">
                      <Link to="/log-in" className="log-in">
                        Connexion
                      </Link>
                    </button>
                    <button type="button" className="sign-button">
                      <Link to="/register" className="register">
                        Inscrivez-vous
                      </Link>
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
