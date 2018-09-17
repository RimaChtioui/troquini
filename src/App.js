import React, { Component } from "react";
import NavBar from "./NavBar/NavBar.js";
import CarouselPage from "./Carousel/Carousel.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CarouselPage />
      </div>
    );
  }
}

export default App;
