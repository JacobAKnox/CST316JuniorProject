'use client'

import {useState} from 'react'  

let observers = []
let guesses_list = []

function registerObserver(fn) {
  observers.push(fn)
}

export function addGuess(guess) {
  const new_data = {
    direction: 'ERROR',
    country: guess.name
  }
  observers.forEach((func) => func(new_data))
}

export default function InfoPanel() {
  const [infoPanelData, setInfoPanelData] = useState([])

  function updateInfoPanel(data) {
    setInfoPanelData([...infoPanelData, data])
  }
  function directionToEmoji(dir) {
    switch(dir) {
      case "North":
        return '⬆️'
        break
      case "South":
        return '⬇️'
        break
      case "West":
        return '⬅️'
        break
      case "East":
        return '➡️'
        break
      case "Northwest": 
        return '↖️'
        break
      case "Southwest":
        return '↙️'
        break
      case "Northeast":
        return '↗️'
        break
      case "Southeast":
        return '↘️'
        break
      default:
        return "ERROR"
        break
    }
  }

  observers = []
  observers.push(updateInfoPanel)
  return(
    <div className="h-32">
      <div className="min-h-full pl-2 pr-2">
          {infoPanelData.map((data, index) => {
            return (
              <div key={index} className="flex gap-x-1">
                <p className="pl-4 mb-1 font-semibold">
                  {directionToEmoji(data.direction)}
                </p>
                <p className="pl-4 mb-1 font-semibold"> {data.country}</p>
              </div>
            )
          })}
      </div>
    </div>
  )  
}

