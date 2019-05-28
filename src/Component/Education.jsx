import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section class="education">
          <div class="row">
            <h2>
              <i class="fas fa-user-graduate icon icon-big" /> &nbsp;Education
            </h2>
            <ul>
              <li>
                I am graduated from DecodeMtl Bootcamp for fullstack Web
                Development
              </li>
              <li>
                I am graduate on Master's of Enginnering on Electrical and
                Computer Engineering from Canada
              </li>
              <li>
                For more information visit my{" "}
                <a
                  class="linked in linked-in"
                  href="https://www.linkedin.com/in/skizsk/"
                  target="_blank"
                  alt="LinkedIn"
                >
                  <i class="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
