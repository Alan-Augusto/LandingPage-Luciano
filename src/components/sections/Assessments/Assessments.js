import "../Section.css";
import "./Assessments.css";
import React from "react";
import {assessments} from "./AssessmentsProviders"
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LuStar } from "react-icons/lu";
import { Carousel } from 'primereact/carousel';


function Assessments(){

    const navigate = useNavigate();

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 5,
            numScroll: 2
        },
        {
            breakpoint: '1250px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '980px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 1
        }
    ];
    
    const productTemplate = (item) => {
        return (
          
        <div className="card-item-assessments" id="card-item-assessments">
            <div className="card-person">
                <img src={require(`./assets/images/${item.image}`)} alt={item.title} />
                <div className="card-person-title">
                    <h3>{item.title}</h3>
                <div className="card-person-rating">
                    {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                        <div className="card-person-rating-star">
                            <FaStar key={i} color="yellow" style={{ height: "15px", width: "auto", boxShadow: "" }} />
                            <LuStar key={i} color="gray" style={{ height: "15px", width: "auto", boxShadow: "" }} />
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div className="card-text">{(item.description.length > 80 ? <p>{item.description.slice(0, 80)}...</p> : <p>{item.description}</p>)}
            </div>
        </div>
        );
    };

    return(
        <section className="section" id="Avaliações">
            <div className="assessments-text">
                <h1>Veja o que meus clientes tem a dizer</h1>
            </div>
            <div className="assessments-list">
                <Carousel  
                    value={assessments} 
                    numVisible={5} 
                    numScroll={1} 
                    responsiveOptions={responsiveOptions} 
                    itemTemplate={productTemplate} 
                    autoplayInterval={3000}
                    showIndicators={true}
                />
            </div>
            <div className="form">
                
            </div>
        </section> 
    )
}
export default Assessments