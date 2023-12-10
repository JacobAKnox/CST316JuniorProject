'use client'
import Popup from "./showtutorial";
import { useState } from "react"
export default function Tutorial(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-3xl transition"
            onClick={()=> setButtonPopup(true)}>CLICK ME</button>
            <Popup trigger = {buttonPopup}>This is the popup message</Popup>
        </div>
    );
}

