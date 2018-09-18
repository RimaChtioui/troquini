import React, { Component } from "react";
import FullPageIntroWithFixedTransparentNavbar from "./NavBar2/NavBar2.js";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";

class App extends Component {
  render() {
    return (
      <div>
        <FullPageIntroWithFixedTransparentNavbar />
        <CommentCaMarche />
      </div>
    );
  }
}

export default App;
