'use client'
import Popup from "./showtutorial";
import { useState } from "react"
export default function Tutorial(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-3xl transition"
            onClick={()=> setButtonPopup(true)}>Tutorial</button>
            <Popup trigger = {buttonPopup}>
            <div>
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => setButtonPopup(false)}>
                    Close
                </button>
            </div>
            <div>
            <img src="Search Bar.JPG" class="w-1000 h-1000" />
            </div>
            </Popup>
        </div>
    );
}

