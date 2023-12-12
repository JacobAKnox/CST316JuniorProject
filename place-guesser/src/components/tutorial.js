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
            <div class="text-center">
                <p class="text-4xl font-bold">Instructions</p>

                    <p class="my-4 text-lg font-serif">1. Name the Country that has the city with the same name as the city shown at the top of the page</p>

                    <p class="my-4 text-lg font-serif">2. Enter the country into the search box and click on one of the options</p>

                    <p class="my-4 text-lg font-serif">3. You have 5 attempts to guess the correct country and each incorrect guess will show on the map</p>

                    <p class="my-4 text-lg font-serif">4. You may view your statistics on the top right of the screen</p>

                    <p class="my-4 text-lg font-serif">5. Lastly, have fun!</p>

            </div>
            </Popup>
        </div>
    );
}

