"use client"

import { game_won, guess_count, puzzle } from "@/game/game"
import { subscribe } from "@/lib/events"
import dynamic from "next/dynamic"
import { useState } from "react"

const MapView = dynamic(() => import('@/components/map'), {ssr:false})
const CountrySearchBox = dynamic(() => import('@/components/countryselect'), {ssr: false})
const InfoPanel = dynamic(() => import('@/components/infopanel'), {ssr:false})

export default function GameLayout() {
    const [gameOver, setGameOver] = useState(false)
    const [firstGuess, setFirstGuess] = useState(true)
    const [gameWon, setGameWon] = useState(false)

    const [rightText, setRightText] = useState(<div><b>{puzzle.USPlace},</b> {puzzle.State}</div>)
    const [guesses, setGuesses] = useState(0)

    const on_guess = (guess) => {
        setFirstGuess(false)
        setRightText(<b>{guess.name}</b>)
        setGuesses(guess_count)
    }
    subscribe("guess_made", on_guess)

    const on_game_over = (goal) => {
        setGameOver(true)
        setFirstGuess(false)
        setGameWon(game_won)
        setGuesses(guess_count)
        setRightText(<div><b>{goal.ForiegnPlace},</b> {goal.Country}</div>)
    }
    subscribe("game_over", on_game_over)

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
                {gameOver &&
                <div className="m-10 w-1/2 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                    <b>{puzzle.USPlace},</b> {puzzle.State}
                </div>}
                <div className="m-10 w-1/2 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                    {rightText}
                </div>
            </div>
            <div className="flex flex-row w-full items-center justify-center">
                {gameOver &&//stops this map from updating
                <MapView event="_disable"/>
                }
                <MapView event=""/>
            </div>
            { gameOver && gameWon &&
            <div className="m-10 w-1/3 text-center bg-slate-400 px-5 py-2 rounded-3xl">
                You got it in {guesses} geuss(es)!
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