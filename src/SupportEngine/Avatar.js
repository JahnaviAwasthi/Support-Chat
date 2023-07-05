import React from "react";
import { useState } from "react";
import {styles} from './styles';

const Avatar = props => {
    const[hovered,setHovered]=useState(false);
    return(
        // This style is for the entire Hello jahnavi - Support Message vaala part and gol photo vaala container
        <div className="transition-3"
        // You can send this style as a prop from index.js of SupportEngine, as to not harcode it
        //already done as it was causing a problem to display avatar in emailForm window
        style={props.style}>
            {/* //This style is for the Jahnavi vaala text only */}
            <div style={{...styles.avatarHello,
            ...{opacity:hovered?'1':'0', paddingBottom:'10px', paddingRight:'10px'}
        }}
        >Hey it's Jahnavi 🤌
        </div>


{/* transition-3 defined in index.css */}

{/* This is for the actual button */}
        <div
        className="transition-3"
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}
        onClick={()=>props.onClick && props.onClick()}
        style={{...styles.chatWithMeButton,
        ...{border:hovered?'2px solid #FFFFFF':'4px solid #7a39e0'}
        }}/>


    </div>

    );

}

export default Avatar;