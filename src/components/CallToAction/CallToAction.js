import Button from "../Button/Button";
import "./CallToAction.css";
import React from "react";


function CallToAction({title, desription, position, model, width}) {
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
    if(position == "center"){
        style = {
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
        }
    }
    if (width) {
        style = {
            ...style,
            maxWidth: width
        };
    }

  return (
    <div className="CallToAction" id={(model=='2')?'CallToAction2' : ((model=='3')? 'CallToAction3':'CallToAction')} style={style}>
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
