import React, { Component } from "react";
import CommentCaMarche from "../CommentCaMarche/CommentCaMarche";
import LastTrocs from "../LastTrocs/LastTrocs";

class HomePage extends Component {
  render() {
    return (
      <div>
        <img src="/fond3.jpg" style={{ width: "100%" }} alt="nav-back" />
        <CommentCaMarche />
        <LastTrocs />
      </div>
    );
  }
}

export default HomePage;
