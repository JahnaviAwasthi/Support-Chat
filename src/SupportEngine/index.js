import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Avatar from './Avatar'
import SupportWindow from "./SupportWindow";

const SupportEngine = () =>
{
    const [visible,setVisible]=useState(false)


    // Yahan se voh code hai jo handle karega ki support window bahanr click karne par baand hojae
    const myRef=useRef(null);

    // useEffect triggers functions whenever certain events occur
    //here it will be triggered when ref variable is changed
    useEffect(()=> {
        function handleClickOutside(event) //event here is mousedown
        {
            if(myRef.current && !myRef.current.contains(event.target)) //if the ref variable is current and if mousedown event.target is outside the cuurent ref
            {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside) //trigger handleClickOutside when mousedown event hoga
        return ()=> {
            document.removeEventListener("mousedown",handleClickOutside) //this event is removed when the page refreshes, etc, to prevent memory leakages
        };
    }, [myRef] )
    //   , [myRef] matlab useEffect will be triggered only when myRef changes
    // Yahan tak hai code to close support window by clicking outside


    return (
        // ref prop used here
        <div ref={myRef}>
            <SupportWindow visible={visible}></SupportWindow>
            <Avatar style={{position:'fixed',bottom:'24px',right:'24px'}}
            onClick={()=>setVisible(true)} />
        
        </div>
    );
}

export default SupportEngine;

