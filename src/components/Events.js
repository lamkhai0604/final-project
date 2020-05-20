import React from "react";
import "./Events.css";

export default function Events() {
  return (
    <div>
      <section className="events">
        <div className="container">
          <div className="section-title">
            <h2>
              Organize Your <span>Events</span> in our Restaurant
            </h2>
          </div>

          <div className="owl-carousel events-carousel">
            <div className="row event-item">
              <div className="col-lg-6">
                <img
                  src="assets/event-birthday.jpg"
                  className="img-fluid"
                  alt="Haha"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Birthday Parties</h3>
                <div className="price">
                  <p>
                    <span>$189</span>
                  </p>
                </div>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div className="row event-item">
              <div className="col-lg-6">
                <img
                  src="assets/event-private.jpg"
                  className="img-fluid"
                  alt="Haha"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Private Parties</h3>
                <div className="price">
                  <p>
                    <span>$290</span>
                  </p>
                </div>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div className="row event-item">
              <div className="col-lg-6">
                <img
                  src="assets/event-custom.jpg"
                  className="img-fluid"
                  alt="haha"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Custom Parties</h3>
                <div className="price">
                  <p>
                    <span>$99</span>
                  </p>
                </div>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
