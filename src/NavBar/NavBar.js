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

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse
//     });
//   }
//   render() {
//     return (
//       <Navbar color="indigo" dark expand="md" scrolling>
//         <NavbarBrand href="/">
//           <strong>Navbar</strong>
//         </NavbarBrand>
//         {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
//         <Collapse isOpen={this.state.collapse} navbar>
//           <NavbarNav left>
//             <NavItem active>
//               <NavLink to="#">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="#">Features</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="#">Pricing</NavLink>
//             </NavItem>
//             <NavItem>
//               <Dropdown>
//                 <DropdownToggle nav caret>
//                   Dropdown
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem href="#">Action</DropdownItem>
//                   <DropdownItem href="#">Another Action</DropdownItem>
//                   <DropdownItem href="#">Something else here</DropdownItem>
//                   <DropdownItem href="#">Something else here</DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>
//             </NavItem>
//           </NavbarNav>
//           <NavbarNav right>
//             <NavItem>
//               <form className="form-inline md-form mt-0">
//                 <input
//                   className="form-control mr-sm-2 mb-0 text-white"
//                   type="text"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//               </form>
//             </NavItem>
//           </NavbarNav>
//         </Collapse>
//       </Navbar>
//     );
//   }
// }

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
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem>
                    <NavLink className="menu" to="/comment-ca-marche">
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
                    <NavLink className="menu" to="/profile">
                      Mon Profil
                    </NavLink>
                  </NavItem>
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
                  </NavItem>
                  <NavItem className="menu-utilitaires">
                    <button type="button" className="log-button">
                      Connexion
                    </button>
                    <button type="button" className="sign-button">
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
