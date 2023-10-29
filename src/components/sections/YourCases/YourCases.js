import Carousel from "../../Caroussel/Caroussel";
import "../Section.css";
import "./YourCases.css";
import React from "react";

import {cases} from "./CasesProviders"

function YourCases(){
    return(
        <section className="section" id="your-cases">
            {/*<CarouselItem/>*/}
            <Carousel
                items={cases}
                itemsPerPage={5}
                showDescription={true}
                showTitle={true}
            />
        </section>
    )
}
export default YourCases
        