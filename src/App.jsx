import React from "react";
import { Component } from "react";
import Header from "./Component/Header.jsx";
import AboutMe from "./Component/AboutMe.jsx";
import Photography from "./Component/Photography.jsx";
import Coding from "./Component/Coding.jsx";
import Ethical from "./Component/Ethical.jsx";
import Education from "./Component/Education.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Photography />
        <Coding />
        <Ethical />
        <Education />
      </div>
    );
  }
}
