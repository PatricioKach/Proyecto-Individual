import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Nav from "../src/Components/Nav/Nav";
import LandingPage from "./Components/LandingPage/LandingPage";
import Filters from "./Components/Filters/Filters";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/page" component={Nav} />
      <Route path="/page" component={Filters} />
      <Route path="/page" component={Home} />
    </BrowserRouter>
  );
}

export default App;
