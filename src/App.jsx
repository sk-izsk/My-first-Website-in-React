import React from "react";
import { Component } from "react";
import Header from "./Component/Header.jsx";
import AboutMe from "./Component/AboutMe.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    );
  }
}
