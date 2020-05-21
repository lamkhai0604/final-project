import React from "react";
import Banner from "./Banner";
import About from "./About";
import Menu from "./Menu";
import Special from "./Special";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navigation from "./Navbar";
import { useState } from "react";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";

export default function Home() {
  let [modal, setModal] = useState(false);

  let openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <Navigation />
      <Banner />
      <About openModal={openModal} />
      {/*Maybe put openmodal inside here, ReactModal below footer */}
      <Menu />
      <Special />
      <Gallery />
      <ContactUs />
      <Footer />

      <ReactModal
        isOpen={modal}
        style={{
          overplay:{},
          content: {},
        }}
        onRequestClose={() => setModal(false)}
      >
        <YouTube video="YoxHEBeF6s0" autoplay style={{width: '100%', height: '100%', zIndex:"100"}}/>
      </ReactModal>
    </div>
  );
}
