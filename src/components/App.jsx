import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from './Services/Services';
import Qualification from './Qualification/Qualification';
import Testimonials from './testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ScrollUp from './ScrollUp/ScrollUp';
import Work from './Work/Work';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
};
