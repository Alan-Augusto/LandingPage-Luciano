import { Navigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, icon, description, linTo, colorCard, colorText, colorTextMark, special }) {
  const styleCard = {
    color: colorText,
    backgroundColor: colorCard,
    width: special ? "84%" : "40%",
    alignItems: "center",
  };

  const styleList = {
    backgroundColor: colorTextMark,
    color: colorText,
  };

  const styleUl = {
    textAlign: special ? "center" : "start",
    alignItems: special ? "center" : "start",
    justifyContent: special ? "center" : "start",
    fontSize: special ? "14px" : "12px",
  };

  const styleTitle = {
    fontSize: special ? "18px" : "14px",
  };

  return (
    <div className="ServiceCard" style={styleCard} onClick={Navigate("/" + linTo)}>
      <i className="Card-Icon">{icon}</i>
      <h3 style={styleTitle}>{title}</h3>
      <ul style={styleUl}>
        {description.map((text, i) => (
          <li key={i} style={styleList}>
            {" "}
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ServiceCard;
