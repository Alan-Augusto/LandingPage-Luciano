import "../Section.css";
import "./Hero.css";
import React from "react";
import HeroIMmage from "./assets/hero.png"
import Button from "../../Button/Button";
import CallToAction from "../../CallToAction/CallToAction";

function Hero() {
  return (
    <section className="section" id="Apresentacao">
      <div id="hero-container">
        <CallToAction
          title="Defesa Trabalhista Exclusiva Para Empregados"
          desription="cada cliente é único e seu caso é nosso compromisso"
          position="left"
        />
        <div id="hero-image">
          <img src={HeroIMmage} alt="Luciano Leite" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
