import React, { Component } from "react";
import "./NavBar.css";
import logo from "./logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CommentCaMarche from "../CommentCaMarche/CommentCaMarche";

library.add(faSearch);

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <div id="nav-left">
              <div className="logo">
                <img src={logo} className="nav-logo" alt="logo" />
              </div>
              <div className="title">
                <h1 className="sr">Troquini</h1>
                <h3 className="tn">.tn</h3>
              </div>
            </div>
            <div id="nav-right">
              <div className="bande-haut">
                <div id="search">
                  <div className="search">
                    <FontAwesomeIcon className="search-icon" icon="search" />
                    <input
                      id="search_input"
                      className="search_input"
                      type="search"
                      placeholder="Que cherchez-vous ?"
                      autocomplete="off"
                    />
                  </div>

                  <div className="search-button-div">
                    <button class="search-button">Rechercher</button>
                  </div>
                </div>
                <div className="menu-utilitaires">
                  <ul id="menu-utilitaires">
                    <li className="lien">
                      <a href="#">Connection</a>
                    </li>
                    <li className="lien">
                      <a href="#">Inscription</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bande-bas">
                <ul id="menu-principal">
                  <div id="decoration-1" />
                  <div id="decoration-2" />
                  <li>
                    <div
                      className="comment-ça-marche"
                      onmouseleave="mouseOut(event)"
                      onmouseenter="mouseOver(event)"
                    >
                      <Link to="/comment-c-m" className="menu">
                        Comment ça marche ?
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div
                      className="je-propose"
                      onmouseleave="mouseOut(event)"
                      onmouseenter="mouseOver(event)"
                    >
                      <a href="#" className="menu">
                        Je propose
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="je-recherche"
                      onmouseleave="mouseOut(event)"
                      onmouseenter="mouseOver(event)"
                    >
                      <a href="#" className="menu">
                        Je recherche
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="mon-profil"
                      onmouseleave="mouseOut(event)"
                      onmouseenter="mouseOver(event)"
                    >
                      <a href="#" className="menu">
                        Mon Profil
                      </a>
                    </div>
                  </li>
                  <div id="decoration-3" />
                  <div id="decoration-4" />
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Route path="/comment-c-m" component={CommentCaMarche} />
          </div>
        </div>
      </Router>
    );
  }
}

export default NavBar;
