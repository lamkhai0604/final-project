import React from "react";
import "./Css/About.css";

export default function Cards(props) {
  return (
    <div>
      <section id="about" className="about">
        <div classNameName="container-fluid">
          <div className="row">
            <div
              className="col-lg-5 align-items-stretch video-box"
              style={{ backgroundImage: "url(assets/about.jpg)" }}
            >
              <button
                onClick={() => props.openModal()}
                className="play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></button>
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
              <div className="content">
                <h3>
                  Eum ipsam laborum deleniti{" "}
                  <strong>velit pariatur architecto aut nihil</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" class="why-us">
        <div class="container">
          <div class="section-title">
            <h2>
              Why choose <span>Our Restaurant</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="box">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>
            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta
                  veritatis dolor quod et vel dire leno para dest
                </p>
              </div>
            </div>
            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>
                  Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                  sunt debitis quo vel nam quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* openModal={openModal} */
}
// display: "flex",
// justifyContent: "center",
// position: "relative",
// alignItems: "center",
// width:"70%",
// height:"70%"
