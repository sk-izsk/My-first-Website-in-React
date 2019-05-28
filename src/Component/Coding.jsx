import React, { Component } from "react";

export default class Coding extends Component {
  render() {
    return (
      <div>
        <section class="coding">
          <div class="row">
            <h2>
              {" "}
              <i class="fas fa-terminal icon icon-big" /> &nbsp;Coding &
              Development
            </h2>
            <ul>
              <li>
                I have knowledge on
                HTML,CSS,Sass,React,Redux,MongoDB,Express/Node,SSH,Git,ES6/ES7
              </li>
              <li>Learning about Fullstack Development</li>
              <li>This website is one of the sample of my work</li>
              <li>
                For more information visit my{" "}
                <a
                  class="github"
                  href="https://github.com/sk-izsk/zsk"
                  target="_blank"
                  alt="github"
                >
                  <i class="fab fa-github-square" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="ethical-hacking">
          <div class="row">
            <h2>
              <i class="fas fa-code icon icon-big" /> &nbsp; Ethical Hacking
            </h2>
            <ul>
              <li>Currently I am learing Ethical Hacking</li>
              <li>I am familiar with kali Linux in moderate level</li>
              <li>
                For more information visit my{" "}
                <a
                  class="github"
                  href="https://github.com/sk-izsk/zsk"
                  target="_blank"
                  alt="github"
                >
                  <i class="fab fa-github-square" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
