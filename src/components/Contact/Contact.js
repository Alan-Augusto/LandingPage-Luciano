import "./Contact.css";
import React from "react";

function Contact({title, value, link, icon, color}){
    
    let text = "black";

    const openLinkInNewTab = () => {
        window.open(link, "_blank");
    };

    if(color === "radial-insta"){
        color = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)";
    }
    else if(color === "radial-whatsapp"){
        color = "radial-gradient(circle, rgba(166,255,199,1) 15%, rgba(33,240,110,1) 100%)";
    }
    else if(color === "radial-email"){
        color = "radial-gradient(circle, rgba(113,231,255,1) 15%, rgba(20,186,255,1) 100%)";
    }
    else if(color = "radial-google"){
        color = "linear-gradient(90deg, rgba(66,133,244,1) 0%, rgba(219,68,55,1) 31%, rgba(244,180,0,1) 64%, rgba(15,157,88,1) 100%)";
        text = "white";
    }
    else{
        color = "white";
    }

    const style = {
        background: color,
        textColor: text
    };
    
    return(
        <div className="Contact" onClick={openLinkInNewTab} style={style}>
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