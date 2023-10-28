import "../Section.css";
import "./Hero.css";
import React from "react";
import HeroIMmage from "./assets/hero.png"
import Button from "../../Button/Button";

function Hero() {
  return (
    <section className="section" id="hero">
      <div id="hero-container">
        <div id="hero-actions">
          <h1>Defesa Trabalhista Exclusiva Para Empregados</h1>
          <p>cada cliente é único e seu caso é nosso compromisso</p>
          <Button
            title="Falar com Dr. Luciano"
            color="var(--tertiary)"
            textColor="var(--secundary)"
          />
        </div>

        <div id="hero-image">
          <img src={HeroIMmage} />
        </div>
      </div>
    </section>
  );
}
export default Hero;
