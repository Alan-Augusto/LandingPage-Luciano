import React from "react"
import "./CaseDefault.css"
import Button from "../../../components/Button/Button"

function CaseDefault({ Title, Description, Cover, Data }) {
    return (
        <div className="CaseDefault">
            <div className="CaseDefault-cover">
                <img src={require(`../../../../public/images/YourCases/${Cover}`)} alt="Cover Image" />
                <div className="CaseDefault-cover-text">
                    <h1>{Title}</h1>
                    <h3>{Description}</h3>
                </div>
            </div>
            <div className="CaseDefault-Data">
                {Data.map((topic, index) => (
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
export default CaseDefault