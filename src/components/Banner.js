import React from "react";
import { Carousel } from "react-bootstrap";
import "./Css/Banner.css";

export default function Banner() {
  return (
    <div>
      <Carousel id="hero">
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
                  <h2 className="animated fadeInDown">
                    <span> Delicious </span> Restaurant
                  </h2>
                  <p className="animated fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid.Sequi ea ut
                    et est quaerat sequi nihil ut aliquam.Occaecati alias
                    dolorem mollitia ut.Similique ea voluptatem.Esse doloremque
                    accusamus repellendus deleniti vel.Minus et temporemodi
                    architecto.
                  </p>
                  <div>
                    <a
                      href="#menu"
                      className="btn-menu animated fadeInUp scrollto"
                    >
                      Our Menu
                    </a>
                    <a
                      href="#book-a-table"
                      className="btn-book animated fadeInUp scrollto"
                    >
                      Book a Table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slide-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                <p className="animated fadeInUp">
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div>
                  <a
                    href="#menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/slide-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animated fadeInDown">
                  Sequi ea ut et est quaerat
                </h2>
                <p className="animated fadeInUp">
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div>
                  <a
                    href="#menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
