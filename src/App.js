import React, { Component } from "react";
import NavBar from "./NavBar/NavBar.js";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import LastTrocs from "./LastTrocs/LastTrocs";
import FooterPage from "./FooterPage/FooterPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CommentCaMarche />
        <LastTrocs />
        <FooterPage />
      </div>
    );
  }
}

export default App;
