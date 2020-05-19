import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";


export default function Banner() {

  return (
    <div>
      {/* <section id="hero">
                    <div className="hero-container">
                        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active" style={{backgroundImage: "url(assets/slide-1.jpg)"}}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown"><span>Delicious</span> Restaurant</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                                et tempore modi architecto.</p>

                                            <div>
                                                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                                                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" style={{backgroundImage: "url(assets/slide-2.jpg)"}}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                                et tempore modi architecto.</p>
                                            <div>
                                                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                                                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item" style={{backgroundImage: "url(assets/slide-3.jpg)"}}>
                                    <div className="carousel-background"><img src="assets/slide-3.jpg" alt="third-line" /></div>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                                et tempore modi architecto.</p>
                                            <div>
                                                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                                                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </section>  */}

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
