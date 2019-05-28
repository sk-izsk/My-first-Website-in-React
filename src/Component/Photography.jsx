import React, { Component } from "react";

export default class Photography extends Component {
  render() {
    return (
      <div>
        <section class="photography">
          <div class="row">
            <h2>
              <i class="fas fa-camera icon icon-big" /> &nbsp;Photography
            </h2>
          </div>
          <ul class="photo-collection">
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/21.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/9.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/11.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/3.jpg" alt="#" />
              </figure>
            </li>
          </ul>
          <ul class="photo-collection">
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/5.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/15.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/17.jpg" alt="#" />
              </figure>
            </li>
            <li>
              <figure class="collection-photo">
                <img src="Resources/img/13.jpg" alt="#" />
              </figure>
            </li>
          </ul>
          <center>
            {" "}
            <a
              class="more-btn"
              href="https://www.instagram.com/sk_izsk/"
              target="_blank"
              alt="Instagram"
            >
              More &nbsp; <i class="fab fa-instagram" /> &nbsp;
            </a>
          </center>
        </section>
      </div>
    );
  }
}
