import "./Contact.css";
import React from "react";

function Contact({title, value, link, icon}){
    
    const openLinkInNewTab = () => {
        window.open(link, "_blank");
    };
    
    return(
        <div className="Contact" onClick={openLinkInNewTab}>
            <i className="Contact-Icon">{icon}</i>
            <div className="Contact-Info">
                <div className="Contact-Title">
                    <h3>{title}</h3>
                </div>
                <div className="Contact-Value">
                    <p>{value}</p>
                </div>
            </div> 
        </div>
    )
}
export default Contact