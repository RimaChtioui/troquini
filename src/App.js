import React, { Component } from "react";
import Data from "./Data.json";
import HomePage from "./HomePage/HomePage";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import AddTroc from "./AddTroc/AddTroc";
import SearchTroc from "./SearchTroc/SearchTroc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import FooterPage from "./FooterPage/FooterPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <NavBar navstyle={"transparent"} />
                  <HomePage />
                  <FooterPage />
                </div>
              )}
            />
            <Route
              path="/"
              render={() => (
                <div>
                  <NavBar navstyle={"info-color"} />
                  <Route
                    path="/comment-ca-marche"
                    component={CommentCaMarche}
                  />
                  <Route path="/add-troc" component={AddTroc} />
                  <Route
                    path="/search-troc"
                    render={() => <SearchTroc trocList={Data} /> }
                  />
                  <FooterPage />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
