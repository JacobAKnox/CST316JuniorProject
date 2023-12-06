'use client'

import {useState} from 'react'  

export default function InfoPanel() {
  const [directionInput, setDirectionInput] = useState('')
  const [countryInput, setCountryInput] = useState('')
  const [infoPanelData, setInfoPanelData] = useState([])

  function handleDirectionChange(event) {
    setDirectionInput(event.target.value)
  }
  function handleCountryChange(event) {
    setCountryInput(event.target.value)
  }
  function handleClick() {
    const newData = {
      direction: directionInput,
      country: countryInput
    }

    setInfoPanelData((prevData) => [...prevData, newData])
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

  return(
    <div>
      <div className="pl-2 pr-2">
          {infoPanelData.map((data) => {
            return (
              <div className="flex gap-x-1">
                <p className="pl-4 mb-1 font-semibold">
                  {directionToEmoji(data.direction)}
                </p>
                <p className="pl-4 mb-1 font-semibold"> {data.country}</p>
              </div>
            )
          })}
      </div>
      {/* Testpanel to simulate writing to infopanel, temporary */}
      <div>
        <input className="mb-2" placeHolder="Direction (North, South, etc.)" value={directionInput} onChange={handleDirectionChange}/>
        <br></br>
        <input className="mb-2" placeHolder="Country Name" value={countryInput} onChange={handleCountryChange}/>
        <br></br>
        <button className="font-bold" onClick={handleClick}>Insert</button>
      </div>
    </div>
  )  
}
