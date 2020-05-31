import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import About from "./About";
import Menu from "./Menu";
import Special from "./Special";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navigation from "./Navbar";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";
import Signin from "../Pages/Signin";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";


export default function Home(props) {
  let [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  async function logout() {
    const res = await fetch(process.env.REACT_APP_SERVER + "/auth/logout", {
    headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
  });
  if(res.status === 204){
    props.setUser(null);
    localStorage.removeItem('token');
  }else {
    alert("Cannot log out at this time")
  }
}

  async function checkUser() {
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1]
      : null;
    const localToken = localStorage.getItem("token");
    const token = localToken || urlToken;

    if (!token) return;
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me", {
      headers: { authorization: `Bearer ${token}` },
    });
    const body = await res.json();
    if (body.status === "ok") {
      setUser(body.data);
      localStorage.setItem("token", token);
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  let openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <Navigation user={user} setUser={setUser} />
      <Banner />
      <About openModal={openModal} />
      <Menu />
      <Special />
      <Gallery />
      <ContactUs />
      <Footer />
      {!props.user ? <Link to="/sign-in">{Signin}</Link> : <span onClick={logout}>Log out</span>}

      <ScrollUpButton
        style={{
          borderRadius: "20px",
          background: "#ffb03b",
          outline: "none"
        }}
      />

      <ReactModal
        isOpen={modal}
        style={{
          overplay: {},
          content: {},
        }}
        onRequestClose={() => setModal(false)}
      >
        <YouTube
          video="YoxHEBeF6s0"
          autoplay
          style={{ width: "100%", height: "100%", zIndex: "10" }}
        />
      </ReactModal>
    </div>
  );
}
