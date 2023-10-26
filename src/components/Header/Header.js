import React, { useEffect, useState } from 'react';
import {sectionIds} from "./SectionIds"
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (sectionId) =>{
    const element=document.getElementById(sectionId);
    if(element){
      const marginTop = 0;
      
      const scrollToY = element.getBoundingClientRect().top + window.scrollY-marginTop;

      window.scrollTo({top: scrollToY, behavior:"smooth"});
    }  
  }

  const determineActiveSection = () => {
    for(let i=sectionIds.length-1; i>=0; i--){
      const section = document.getElementById(sectionIds[i]);
      if(section){
        const rect = section.getBoundingClientRect();
        if(rect.top<=120 && rect.bottom >= 120){
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  }

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 300){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }

      determineActiveSection();
    }

    window.addEventListener('scroll', handleScroll);

    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <div className="Header">
      <nav className={isScrolled ? "scrolled" : "" }>
        <div className='container'>
          <div className='row'>
            <div className='logo'>
              LGL - Advocacia Trabalhista
            </div>

            <ul className='menu-bar'>
              {
                sectionIds.map((sectionId, i) =>(
                  <li key={i} onClick={()=>scrollToSection(sectionId)}>
                    <Link to="/" className={activeLink === sectionId ? "active" : ""}>{sectionId}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;