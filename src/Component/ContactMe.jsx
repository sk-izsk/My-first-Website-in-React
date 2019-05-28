import React, { Component } from "react";

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <section class="contact-me">
          <div class="row">
            <h2> Feel free to reach me. </h2>
          </div>
          <div class="row">
            <form method="post" action="#" class="contact-form">
              <div class="row">
                <div class="col span-1-of-3">
                  <label for="name">Name</label>
                </div>
                <div class="col span-2-of-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="email">Email</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div class="row">
                    <div class="col span-1-of-3">
                      <label>How do you know about me ?</label>
                    </div>
                    <div class="col span-2-of-3">
                      <select name="find-me" id="find-me">
                        <option value="friends">Friends</option>
                        <option value="serach">Serach Engine</option>
                        <option value="social-media">Social Media</option>
                        <option value="github"> Github </option>
                        <option value="linkedin" selected>
                          LinkedIn
                        </option>
                        <option value="other"> Others </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col span-1-of-3">
                      <label for="news">New Letter</label>
                    </div>
                    <div class="col span-2-of-3">
                      <input type="checkbox" name="news" id="news" checked />{" "}
                      Yes, Please
                    </div>
                    <div class="row">
                      <div class="col span-1-of-3">
                        <label for="message">Your Message</label>
                      </div>
                      <div class="col span-2-of-3">
                        <textarea
                          name="message"
                          placeholder="Type Here"
                          id="message"
                        />
                      </div>
                      <div class="row">
                        <div class="col span-1-of-3">
                          <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                          <input type="submit" value="Send it!" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
