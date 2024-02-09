import React from "react"
import "./Case.css"
import Button from "../../components/Button/Button"

function Case({ Item, setActiveLink }) {
    return (
        <div className="Case">
            <div className="Case-cover">
                <img src={require(`../../../public/images/YourCases/${Item.image}`)} alt={Item.title} />
                <div className="Case-cover-text">
                    <h1>{Item.title}</h1>
                    <h3>{Item.description}</h3>
                </div>
            </div>
            <div className="Case-Data">
                {Item.data.map((topic, index) => (
                    <div key={index}>
                        <h2>{topic.title}</h2>
                        <p>{topic.content}</p>
                    </div>
                ))}
            </div>
            <Button
                title="Falar com Dr. Luciano"
                color="var(--tertiary)"
                textColor="var(--secundary)"
            />
        </div>
    )
}
export default Case