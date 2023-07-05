import React from "react";
import {styles} from '../styles'
import EmailForm from "./EmailForm";

const SupportWindow = props =>
{
    return(
        <div className="Transition-5"
        style={{...styles.supportWindow,
        ...{opacity:props.visible? '1':'0'}
        }}>

            <EmailForm></EmailForm>
        </div>
    )


}


export default SupportWindow;