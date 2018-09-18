import React from "react";
import "./NavBar2.css";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  Mask,
  View
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import CarouselPage from "../Carousel/Carousel";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
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
              <CarouselPage />
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

export default FullPageIntroWithFixedTransparentNavbar;
