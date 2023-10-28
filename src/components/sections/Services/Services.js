import { services } from './ServiceContext'
import ServiceCard from "../../ServiceCard/ServiceCard";
import "../Section.css";
import "./Services.css";
import React from "react";

function Services(){
    return(
        <section className="section" id="services">
            <div className='cards-main'>
                {
                    services.map((service, i)=>(
                        <ServiceCard
                            key={i}
                            title={service.title}
                            icon={service.icon}
                            color={service.colorCard}
                            colorText={service.colorText}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Services