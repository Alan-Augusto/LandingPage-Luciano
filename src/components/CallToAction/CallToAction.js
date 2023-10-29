import Button from "../Button/Button";
import "./CallToAction.css";
import React from "react";


function CallToAction({title, desription, position, model}) {
    let style = {}
    if(position == "right"){
        style = {
            alignItems: 'flex-end',
            textAlign: 'right',
        }
    }
    if(position == "left"){
        style = {
            alignItems: 'flex-start',
            textAlign: 'left',
        }
    }

  return (
    <div className="CallToAction" id={(model=='2')?'CallToAction2' : 'CallToAction'} style={style}>
        {title && (<h1>{title}</h1>)}
        {desription && (<p>{desription}</p>)}
        <Button
            title="Falar com Dr. Luciano"
            color="var(--tertiary)"
            textColor="var(--secundary)"
        />
    </div>
  );
}
export default CallToAction;
