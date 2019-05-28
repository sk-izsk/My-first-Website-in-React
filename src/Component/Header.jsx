import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div class="">
              <a href="#">
                {" "}
                <img
                  src="Resources/img/logo-trans.png"
                  alt="zsk"
                  class="logo"
                />{" "}
              </a>
              <ul class="main-nav">
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Coding & Development</a>
                </li>
                <li>
                  <a href="#">Ethical Hacking</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="zsk-text-box">
            <h1> Time is limited, don't waste it. </h1>
            <center>
              {" "}
              <a class="explore-btn" href="#">
                Let's Explore!
              </a>{" "}
            </center>
          </div>
        </header>
      </div>
    );
  }
}
