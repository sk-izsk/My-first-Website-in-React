import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <section class="about-me">
          <div class="row">
            <h2>You can hate me, but can't ignore me</h2>
            <p class="long-copy">
              Hello, My name is Zeeshan. This is my website that I buit from the
              scratch in order to share my interest to you
            </p>
          </div>
          <div class="row">
            <div class="col span-1-of-4 box">
              <h3>
                <i class="fas fa-camera icon icon-small" /> &nbsp; Photography
              </h3>
              <h4>
                <u>Images are memory, so make it memorable</u>
              </h4>
              <p>
                Photography is one thing that I love to do most. Does not matter
                whether I am free or not. It is my passion. I love to take macro
                shots and timelapse as well. Currently I am using Nikon
                D3400,One Plus 5, Yuneek Breeze 4k drone.
              </p>
            </div>
            <div class="col span-1-of-4 box">
              <h3>
                <i class="fas fa-terminal icon icon-small" /> &nbsp;Coding &
                development
              </h3>
              <h4>
                <u> Coding is reflection of our imagination</u>
              </h4>
              <p>
                {" "}
                In my opinion coding helps to enhance our thinking power in
                different aspect.I love to do coding as well specially in web
                development, as you can see from this website.I have knowledge
                on HTML,CSS,JS.
              </p>
            </div>
            <div class="col span-1-of-4 box">
              <h3>
                <i class="fas fa-code icon icon-small" /> &nbsp; Ethical Hacking
              </h3>
              <h4>
                <u>It helps us to point out our security loopholes</u>{" "}
              </h4>
              <p>
                Anonymity is future! In my free time I love to learn about
                ethical hacking. Although I am novice on it but I have enough
                interest to invest on it.{" "}
              </p>
            </div>
            <div class="col span-1-of-4 box">
              <h3>
                <i class="fas fa-user-graduate icon icon-small" />{" "}
                &nbsp;Education
              </h3>
              <h4>
                <u>Education is only thing that no one can take it from you</u>{" "}
              </h4>
              <p>
                I have done my master's of engineering from Concordia
                Univeristy(Canada) on Electrical and Computer engineering
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
