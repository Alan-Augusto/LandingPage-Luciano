import "../Section.css";
import "./Contacts.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Contact from "../../../components/Contact/Contact";

function Contacts(){
    return(
        <section className="section" id="Contatos">
            <div className="contact-text">
                <h1>Fale com o Dr. Luciano</h1>
                <p>Entre em contato para agendar uma consulta ou para tirar dúvidas.</p>
            </div>
            <div className="contact-content">
                <div className="contact-list">
                    <Contact
                        title="Whatsapp"
                        value="(31) 99146-9620"
                        color="radial-whatsapp"
                        link="https://api.whatsapp.com/send?phone=5531991469620&text=Ol%C3%A1,%20Dr.Luciano!%0AVim%20pelo%20seu%20site.%20Gostaria%20de%20orienta%C3%A7%C3%B5es."
                        icon={<FaWhatsapp size={"1.9em"}/>}
                    />
                    <Contact
                        title="Instagram"
                        value="@lgladvtrabalhista"
                        color="radial-insta"
                        link="https://www.instagram.com/lgladvtrabalhista?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
                        icon={<FaInstagram size={"1.9em"}/>}
                    />
                    <Contact
                        title="E-mail"
                        value="luciano.314@hotmail.com"
                        color="radial-email"
                        link="mailto:luciano.314@hotmail.com"
                        icon={<MdOutlineEmail size={"1.9em"}/>}
                    />
                </div>
                <div className="contact-form">
                    <div className="form-left">
                        <div className="form-input">
                            <span>Nome</span>
                            <input type="text" placeholder="Como posso te chamar?"/>
                        </div>
                        <div className="form-input">
                            <span>Contato</span>
                            <input type="text" placeholder="Telefone, email ou rede social."/>
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-input">
                            <span>Mensagem</span>
                            <textarea type="text" placeholder="Deixe sus dúvida ou necessidade!"/>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}
export default Contacts