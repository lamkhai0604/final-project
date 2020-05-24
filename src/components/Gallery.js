import React from "react";
import "./Css/Gallery.css";

export default function Gallery(props) {
  return (
    <div>
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              Some photos from <span>Our Restaurant</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-1.jpg"
                  onClick={() => props.openModal()}
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-2.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-3.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-4.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-5.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-6.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-7.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-7.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/gallery-8.jpg"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="assets/gallery-8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
