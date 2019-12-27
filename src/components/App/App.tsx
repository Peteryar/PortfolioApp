import React from 'react';
import './app.css';
import NavBar from '../NavBar/NavBar'
import IntroComp from '../IntroComp/IntroComp';
import About from '../About/About';
import Cards from '../JobCards/Cards';
import Portfolio from '../Portfolio/Portfolio';
import Testimony from '../Testimonials/Testimony'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'

export default function App() {
    return (
        <div id="app-con">
            <NavBar />
            <IntroComp />
            <About />
            <Cards />
            <Portfolio />
            <Testimony />
            <Contact />
            <Footer />
        </div>
    );
}