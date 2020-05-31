import React from "react";
import { Carousel } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import "./Css/Banner.css";
import { Link } from "react-router-dom";

export default function Banner(props) {
  const isAuthenticated = localStorage.getItem("user");
  return (
    <div>
      <Carousel id="hero">
        {/*---------
            BANNER 1 
         ------------*/}
        <Carousel.Item>
          <img
            className="carousel-item active"
            src="assets/slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-container mb-3">
              <div>
                <div className="carousel-content">
                  <Zoom top cascade>
                    <h2>
                      <span> Delicious </span> Restaurant
                    </h2>
                  </Zoom>
                  <Zoom left cascade>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid.Sequi ea
                      ut et est quaerat sequi nihil ut aliquam.Occaecati alias
                      dolorem mollitia ut.Similique ea voluptatem.Esse
                      doloremque accusamus repellendus deleniti vel.Minus et
                      temporemodi architecto.
                    </p>
                  </Zoom>
                  <Zoom right cascade>
                    <div>
                      <a href="#menu" className="btn-menu">
                        Our Menu
                      </a>
                      {isAuthenticated && (
                        <Link to="/Book-table" className="btn-book">
                          Book a Table
                        </Link>
                      )}
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/*---------
            BANNER 2
         ------------*/}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slide-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carousel-container">
              <div className="carousel-content">
                <Bounce top cascade>
                  <h2>Lorem Ipsum Dolor</h2>
                </Bounce>
                <Bounce right cascade>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                </Bounce>
                <Bounce left cascade>
                  <div>
                    <a
                      href="#menu"
                      className="btn-menu animated fadeInUp scrollto"
                    >
                      Our Menu
                    </a>
                    {isAuthenticated && (
                      <Link to="/Book-table" className="btn-book">
                        Book a Table
                      </Link>
                    )}
                  </div>
                </Bounce>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/*---------
            BANNER 3
         ------------*/}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slide-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carousel-container">
              <div className="carousel-content">
                <Rotate cascade>
                  <h2>Sequi ea ut et est quaerat</h2>
                </Rotate>
                <Rotate right cascade>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                </Rotate>
                <Rotate left cascade>
                  <div>
                    <a href="#menu" className="btn-menu">
                      Our Menu
                    </a>
                    {isAuthenticated && (
                      <Link to="/Book-table" className="btn-book">
                        Book a Table
                      </Link>
                    )}
                  </div>
                </Rotate>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
