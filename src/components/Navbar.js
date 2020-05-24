import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";
import "./Css/Navbar.css";

export default function Navigation() {
  let [background, setBackground] = useState("");
  let [topGround, setTopGround] = useState("");

  const onScroll = () => {
    let newBackground = window.scrollY < 150 ? "" : "navbar-scrolled";
    setBackground(newBackground);
  };

  const topScroll = () => {
    let topScrolled =window.scrollY < 150 ? "" : "topbar-scrolled";
    setTopGround(topScrolled);
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", topScroll);
  }, []);

  const history = useHistory();

  // function handleClick(event) {
  //   console.info("You clicked a breadcrumb.");
  // }

  return (
    <div>
      <section
        id="topbar"
        className={`d-none d-lg-flex align-items-center fixed-top ${topGround}`}
      >
        <div className="container text-right">
          <i className="icofont-phone"></i> +1 2345 6789 10
          <i className="icofont-clock-time icofont-rotate-180"></i> Mon-Sat:
          11:00 AM - 23:00 PM
        </div>
      </section>

      <header
        id="header"
        className={`fixed-top ${background} d-flex align-items-center`}
      >
        <div class="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <a href="index.html">
                <span>Delicious</span>
              </a>
            </h1>
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <a href="/" onClick={() => history.push("/")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => history.push("/")}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => history.push("/")}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#specials" onClick={() => history.push("/")}>
                  Specials
                </a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="/Sign-in">
                    Sign in
                  </Link>
                  <Link color="inherit" to="Sign-up">
                    Sign up
                  </Link>
                </Breadcrumbs>
              </li>
              <li class="book-a-table text-center">
                <Link to="/Book-table">Book a table</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
