import { Navigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({title, icon, description, linTo, color, colorText}){
    
    const style={
        color : colorText,
        backgroundColor : color
    }

    return(
        <div className="ServiceCard" style={style} onClick={Navigate("/"+linTo)}>
            <i className="Card-Icon">{icon}</i>
            <h3>{title}</h3>
            <ul>
                {
                    description.map((text, i) =>(
                        <li key={i}> {text}
                        </li>
                    ))
                }                
            </ul>
        </div>
    )
}
export default ServiceCard