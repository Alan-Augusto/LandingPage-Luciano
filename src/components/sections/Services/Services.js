import { services } from './ServiceProviders'
import ServiceCard from "../../ServiceCard/ServiceCard";
import "../Section.css";
import "./Services.css";
import React from "react";
import CallToAction from "../../CallToAction/CallToAction";

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
                            description={service.description}
                            colorText={service.colorText}
                        />
                    ))
                }

            </div>
            <CallToAction
                title="Minhas principais experiências te atendem?"
                desription="Faço Orientações Jurídicas em situações relacionadas à defesa de empregados na Justiça do Trabalho"
                position="right"
            />
        </section>
    )
}
export default Services