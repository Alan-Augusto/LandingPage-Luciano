import Carousel from "../../Caroussel/Caroussel";
import "../Section.css";
import "./Assessments.css";
import React from "react";
import {assessments} from "./AssessmentsProviders"

function Assessments(){
    return(
        <section className="section" id="Avaliações">
            <div className="assessments-text">
                <h1>Veja o que meus clientes tem a dizer</h1>
            </div>
            <div className="assessments-list">
                <Carousel
                        items={assessments}
                        itemsPerPage={5}
                        showDescription={true}
                        showTitle={true}
                        showImage={true}
                        colorIndicator={"var(--tertiary)"}
                />
            </div>
            <div className="form">
                
            </div>
        </section> 
    )
}
export default Assessments