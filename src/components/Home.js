import React from 'react';
import Banner from "./Banner";
import About from "./About";
import Menu from "./Menu";
import Special from "./Special";
// import Events from "./Events";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

export default function Home() {
    return (
        <div>
             <Banner />
             <About />
             <Menu />
             <Special />
             {/* <Events /> */}
             <Gallery />
             <ContactUs />
             <Footer />
        </div>
    )
}
