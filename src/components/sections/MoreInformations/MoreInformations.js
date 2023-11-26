import CallToAction from "../../CallToAction/CallToAction";
import HeroIMmage from "./assets/duvida.png"
import "../Section.css";
import "./MoreInformations.css";
import React from "react";

function MoreInformations(){
    return(
        <section className="section" id="Dúvidas">
            <div id="doubts-container">
                <div id="doubts-image">
                    <img src={HeroIMmage} alt="Luciano Leite" />
                </div>
                <CallToAction
                title="Precisa de mais informações?"
                desription="Estou aqui para estudar e analisar seu caso da melhor forma possível"
                position="right"
                model="3"
                button={true}
                />
            </div>
        </section>
    )
}
export default MoreInformations