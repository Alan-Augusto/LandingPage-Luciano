import React from "react";
import "./Button.css";

function Button({ title, textColor, color }) {
  const style = {
    color: textColor,
    backgroundColor: color
  };

  const openLinkInNewTab = () => {
    const link = "https://api.whatsapp.com/send?phone=5531991469620&text=Ol%C3%A1,%20Dr.Luciano!%0AVim%20pelo%20seu%20site.%20Gostaria%20de%20orienta%C3%A7%C3%B5es.";

    // abre o link em uma nova guia
    window.open(link, "_blank");
  };

  return (
    <button className="Button" style={style} onClick={openLinkInNewTab}>
      {title}
    </button>
  );
}

export default Button;
