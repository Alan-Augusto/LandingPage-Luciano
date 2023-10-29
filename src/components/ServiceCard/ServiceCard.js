import { Navigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({title, icon, description, linTo, colorCard, colorText, colorTextMark}){
    
    const styleCard={
        color : colorText,
        backgroundColor : colorCard
    }

    const styleList = {
        backgroundColor: colorTextMark,
        color : colorText
    }


    return(
        <div className="ServiceCard" style={styleCard} onClick={Navigate("/"+linTo)}>
            
            <i className="Card-Icon">{icon}</i>
            <h3>{title}</h3>
            <ul>
                {
                    description.map((text, i) =>(
                        <li key={i} style={styleList}> {text}
                        </li>
                    ))
                }                
            </ul>
        </div>
    )
}
export default ServiceCard