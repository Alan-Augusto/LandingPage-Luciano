import React, { useEffect, useState } from 'react';
import { sectionIds } from "./SectionIds"
import './Header.css';
import { Link } from 'react-router-dom';

function Header({activeLink, setActiveLink, scrollToSection}) {

  const [isScrolled, setIsScrolled] = useState(false);

  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  }

  const handleSelectChange = (event) => {
    const selectedSection = event.target.value;
    setActiveLink(selectedSection);
    scrollToSection(selectedSection);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      determineActiveSection();
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="Header">
      <nav className={isScrolled ? "scrolled" : ""}>
        <div className='container'>
          <div className='row'>
            <div className='logo'>
              <p>LGL - Advocacia Trabalhista</p>
            </div>

            <ul className='menu-bar'>
              {
                sectionIds.map((sectionId, i) => (
                  <li className='menu-bar-elements' key={i} onClick={() => scrollToSection(sectionId)}>
                    <Link to="/" className={activeLink === sectionId ? "active" : ""}>{sectionId}</Link>
                    { i !== sectionIds.length - 1 && <p>|</p> }
                  </li>
                  
                ))
              }
            </ul>

            <div className='mobile-menu-bar'>
              <select onChange={handleSelectChange} value={activeLink}>
                {sectionIds.map((section, i) => (
                  <option key={i} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
