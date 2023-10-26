import "./Section.css";
import "./Hero.css";
import React from "react";
import HeroIMmage from "./assets/hero.png"

function Hero() {
  return (
    <section className="section" id="hero">
      <div id="hero-container">
        <div id="hero-actions">
          <h1>Defesa Trabalhista Exclusiva Para Empregados</h1>
          <p>cada cliente é único e seu caso é nosso compromisso</p>
          <button>Falar com Dr. Lciano</button>
        </div>

        <div id="hero-image">
          <img src={HeroIMmage} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
