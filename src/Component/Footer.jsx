import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="col span-1-of-2">
            <ul class="footer-nav">
              <li>
                {" "}
                <a href="#"> About Me </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Blog </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Contact me </a>{" "}
              </li>
            </ul>
          </div>
          <div class="col span-1-of-2">
            <ul class="social-icons">
              <li>
                <a href="https://www.facebook.com/Sk.iZsk" target="_blank">
                  <i class="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Sk_iZsk" target="_blank">
                  <i class="fab fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/skizsk/" target="_blank">
                  <i class="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sk_izsk/" target="_blank">
                  <i class="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/sk-izsk/zsk" target="_blank">
                  <i class="fab fa-github-alt" />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/111821655496338699062"
                  target="_blank"
                >
                  <i class="fab fa-google-plus-square" />
                </a>
              </li>
              <li>
                <a href="https://t.me/sk_izsk" target="_blank">
                  <i class="fab fa-telegram-plane" />
                </a>
              </li>
            </ul>
          </div>
          <div class="row">
            <p>Copyright &copy;2019 by iZsk. All right reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
