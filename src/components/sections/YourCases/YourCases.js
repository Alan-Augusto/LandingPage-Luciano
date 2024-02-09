import Carousel from "../../Caroussel/Caroussel";
import "../Section.css";
import "./YourCases.css";
import React from "react";
import CallToAction from "../../CallToAction/CallToAction";
import {cases} from "../../../pages/Cases/CasesProviders.js"

function YourCases(){
    return(
        <section className="section" id="Casos">
            <div className="Title">
                <CallToAction
                    title="Dê uma olhada nos principais serviços!"
                    desription="Seu caso é particular e estudado com cautela."
                    position="center"
                    model="3"
                    width="60%"
                    button={false}
                />
            </div>
            <div className="Cases">
                <Carousel
                    items={cases}
                    itemsPerPage={4}
                    showDescription={true}
                    showTitle={true}
                    showImage={true}
                    imagePath="YourCases"
                    colorIndicator={"var(--tertiary)"}
                />
            </div>
        </section>
    )
}
export default YourCases
        