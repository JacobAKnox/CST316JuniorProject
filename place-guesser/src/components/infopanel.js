'use client'

import {useState} from 'react'  
import {goal} from '../game/game.js'

let observers = []
let guesses_list = []

function registerObserver(fn) {
  observers.push(fn)
}

function calculateDirection(guess_pos) {
  const goal_pos = {
    lat: goal.latitude,
    lon: goal.longitude
  }
  let result = ""

  const lat_diff = goal_pos.lat - guess_pos.lat
  const lon_diff = goal_pos.lon - guess_pos.lon

  result += (lat_diff < 0) ? "South" : "North"
  result += (lon_diff < 0) ? "West" : "East"

  return result
}

export function addGuess(guess) {
  const new_data = {
    direction: calculateDirection({lat: guess.latitude, lon: guess.longitude}),
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
      case "NorthWest": 
        return '↖️'
        break
      case "SouthWest":
        return '↙️'
        break
      case "NorthEast":
        return '↗️'
        break
      case "SouthEast":
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

