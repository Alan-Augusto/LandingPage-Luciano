import React from "react"
import "./Button.css"

function Button({title, textColor, color}){

    const style ={
        color:textColor,
        backgroundColor: color
    }

    return(
        <button className="Button" style={style}>{title}</button>
    )
}
export default Button