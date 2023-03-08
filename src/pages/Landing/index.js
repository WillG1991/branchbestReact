import React from "react";
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import About from '../../components/about';
import Menu from '../../components/menu';
import MailingList from '../../components/mailinglist';
import Catering from '../../components/catering';
import Gallery from '../../components/gallery'


function LandingPage() {
  return (
    <div className="App">
    <Hero></Hero>
    <About/>
    <Menu/>
    <MailingList/>
    <Catering/>
    <Contact/>
    <Gallery/>
    <Footer/>
        </div>
  );
}

export default LandingPage;