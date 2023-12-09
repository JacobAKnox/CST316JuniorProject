"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const MapView = dynamic(() => import('@/components/map'), {ssr:false})
const CountrySearchBox = dynamic(() => import('@/components/countryselect'), {ssr: false})
const InfoPanel = dynamic(() => import('@/components/infopanel'), {ssr:false})

export default function GameLayout() {
    const [gameOver, setGameOver] = useState(true)
    const [firstGuess, setFirstGuess] = useState(false)
    const [gameWon, setGameWon] = useState(false)

    return (
        <div className="flex flex-col w-2/3 items-center">
            {firstGuess &&
            <div className="text-center text-3xl">
            What country has<br/>
            a city with the<br/>
            same name as: 
            </div>
            }
            {gameWon &&
            <div className="text-center text-green-500 text-3xl">
                Correct!
            </div>
            }
            {((!gameOver || !gameWon) && !firstGuess) &&
            <div className="text-center text-red-600 text-3xl">
                Incorrect
            </div>
            }
            <div className="flex flex-row w-full items-center justify-center">
                {!gameOver &&
                <div className="m-10 w-1/2 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                    Find [placeholder]
                </div>}
                <div className="m-10 w-1/2 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                    Test
                </div>
            </div>
            <div className="flex flex-row w-full items-center justify-center">
                {!gameOver &&
                <MapView event=""/>
                }
                <MapView event="guess_made"/>
            </div>
            { gameOver && gameWon &&
            <div className="m-10 w-1/3 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                You got it in [n] geusses!
            </div>
            }   
            { gameOver && !gameWon &&
            <div className="m-10 w-1/3 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                You lost
            </div>
            }   
            { !gameOver &&
            <CountrySearchBox/>
            }
            { !gameOver &&
            <InfoPanel/>
            }
        </div>
    )
}