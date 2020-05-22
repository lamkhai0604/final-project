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

  function handleClick(event) {
    // event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

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
                  <Link color="inherit" to="/Sign-in" onClick={handleClick}>
                    Sign in
                  </Link>
                  <Link color="inherit" to="Sign-up" onClick={handleClick}>
                    Sign up
                  </Link>
                </Breadcrumbs>
              </li>
              <li class="book-a-table text-center">
                <a href="#book-a-table">Book a table</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <Navbar>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={() => history.push("/")}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={() => history.push("/login")}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}
