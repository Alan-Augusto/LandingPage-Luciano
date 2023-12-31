import "../Section.css";
import "./Contacts.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Contact from "../../../components/Contact/Contact";

function Contacts(){
    return(
        <section className="section" id="Contatos">
            <div className="contact-list">
                <Contact
                    title="Whatsapp"
                    value="(31) 99146-9620"
                    link="https://api.whatsapp.com/send?phone=5531991469620&text=Ol%C3%A1,%20Dr.Luciano!%0AVim%20pelo%20seu%20site.%20Gostaria%20de%20orienta%C3%A7%C3%B5es."
                    icon={<FaWhatsapp size={"1.9em"}/>}
                />
                <Contact
                    title="E-mail"
                    value="luciano.314@hotmail.com"
                    link="mailto:luciano.314@hotmail.com"
                    icon={<MdOutlineEmail size={"1.9em"}/>}
                />
                
            </div>
            <div className="form">
                
            </div>
        </section> 
    )
}
export default Contacts