// import Carousel from "../../Caroussel/Caroussel";
import "../Section.css";
import "./YourCases.css";
import React from "react";
import CallToAction from "../../CallToAction/CallToAction";
import { useNavigate } from "react-router-dom";

import { Carousel } from 'primereact/carousel';
        
import {cases} from "../../../pages/Cases/CasesProviders.js"


function YourCases(){

    const navigate = useNavigate();

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 2
        },
        {
            breakpoint: '1250px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '980px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    
    const productTemplate = (item) => {
        return (
            <div className="carousel-container" onClick={() => navigate(item.url)}>
                <div className="card-image">
                  <img
                    src={require(`./assets/images/${item.image}`)}
                    alt={item.title}
                  />
                </div>
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
        );
    };

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
                    value={cases} 
                    numVisible={3} 
                    numScroll={1} 
                    responsiveOptions={responsiveOptions} 
                    itemTemplate={productTemplate} 
                    autoplayInterval={3000}
                    showIndicators={true}
                />
            </div>
        </section>
    )
}
export default YourCases
        