import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import CarouselLanding from "./components/Carousel/CarouselLanding";
import Alert from "./components/AlertSection/AlertSection";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar styles={"Overlay"} />
      <Alert />
      <CarouselLanding />
    </Router>
  );
}

export default App;
