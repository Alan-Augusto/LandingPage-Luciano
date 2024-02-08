import "./App.css";
import { sectionIds } from "./components/Header/SectionIds"
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.js"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground.tsx";
import RecisaoContratoTrabalho from "./pages/Cases/RecisaoContratoTrabalho.js";

function App() {

  const [activeLink, setActiveLink] = useState("Apresentação");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  };

  const goToNextPage = () => {
    const currentIndex = sectionIds.indexOf(activeLink);
    const nextIndex = currentIndex + 1;
  
    if (nextIndex < sectionIds.length) {
      setActiveLink(sectionIds[nextIndex]);
      scrollToSection(sectionIds[nextIndex]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header activeLink={activeLink} setActiveLink={setActiveLink} scrollToSection={scrollToSection}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rescisao-contrato-trabalho" element={<RecisaoContratoTrabalho/>} />
        </Routes>
        <div id="arrow-container">
          <div id="arrow-subcontainer">
            <MdKeyboardArrowDown id="arrow"size="2em" onClick={()=>goToNextPage()}/>
          </div>
        </div>
      </Router>
      <AnimatedBackground/>
      <Footer/>
    </div>
  );
}

export default App;


  /*
    <Header/>
    <HeroSection/>
    <ServicesSection/>
    <ContactSection/>    
  */
