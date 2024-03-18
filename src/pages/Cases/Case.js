import React, { useEffect } from "react";
import "./Case.css";
import Button from "../../components/Button/Button";

function Case({ Item, setActiveLink }) {
  const urlBackground = `url(${require(`../../../public/images/YourCases/${Item.image}`)})`;

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo quando o componente é montado
  }, []); // O array vazio como segundo argumento garante que este efeito só seja executado uma vez, quando o componente é montado

  return (
    <div className="Case">
      <div className="Case-cover" style={{ backgroundImage: urlBackground }}>
        <div className="Case-cover-text">
          <h1>{Item.title}</h1>
          <h3>{Item.description}</h3>
        </div>
      </div>
      <div className="Case-Data">
        {Item.data.map((topic, index) => (
          <div className="Case-Data-Text" key={index}>
            <h2>{topic.title}</h2>
            <p>{topic.content}</p>
          </div>
        ))}
      </div>
      <div className="Case-Action">
        <strong>Tire qualquer dúvida comigo</strong>
        <Button title="Falar com Dr. Luciano" color="var(--tertiary)" textColor="var(--secundary)" />
      </div>
    </div>
  );
}
export default Case;
