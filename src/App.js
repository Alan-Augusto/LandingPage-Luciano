import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <div id="arrow">
          <div id="arrow-container">
            <MdKeyboardArrowDown size="2em" />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

{
    /*
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <ContactSection/>    
    */
}
