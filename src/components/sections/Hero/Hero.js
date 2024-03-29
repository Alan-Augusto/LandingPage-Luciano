import "../Section.css";
import "./Hero.css";
import React from "react";
import HeroIMmage from "./assets/hero.png";
import CallToAction from "../../CallToAction/CallToAction";

function Hero() {
  return (
    <section className="section" id="Apresentação">
      <div id="hero-container">
        <CallToAction title="Defesa Trabalhista Para Empregados" desription="cada cliente é único e seu caso é nosso compromisso" position="left" button={true} />
        <div id="hero-image">
          <img src={HeroIMmage} alt="Luciano Graciano" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
