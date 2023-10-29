import { services } from './ServiceProviders'
import ServiceCard from "../../ServiceCard/ServiceCard";
import "../Section.css";
import "./Services.css";
import React from "react";
import CallToAction from "../../CallToAction/CallToAction";

function Services(){
    return(
        <section className="section" id="services">
            <div id='services-new-action'>
                <CallToAction model="2"/>
            </div>
            <div className='cards-main'>
                {
                    services.map((service, i)=>(
                        <ServiceCard
                            key={i}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                            colorCard={service.colorCard}
                            colorText={service.colorText}
                            colorTextMark={service.colorTextMark}
                        />
                    ))
                }

            </div>
            <CallToAction
                title="Minhas principais experiências te atendem?"
                desription="Faço Orientações Jurídicas em situações relacionadas à defesa de empregados na Justiça do Trabalho"
                position="right"
                model="2"
            />
        </section>
    )
}
export default Services