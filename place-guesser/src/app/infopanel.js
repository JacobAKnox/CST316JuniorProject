'use client'

import { mock_infopanel_data } from '@/data/mock_infopanel_data'

export default function InfoPanel() {
  function directionToEmoji(dir) {
    switch(dir) {
      case "North":
        return '⬆️'
        break;
      case "South":
        return '⬇️'
        break;
      case "West":
        return '⬅️'
        break;
      case "East":
        return '➡️'
        break;
      case "Northwest": 
        return '↖️'
        break;
      case "Southwest":
        return '↙️'
        break;
      case "Northeast":
        return '↗️'
        break;
      case "Southeast":
        return '↘️'
        break;
    }
  }

  return(
    <div>
      <div className="pl-2 pr-2">
          {mock_infopanel_data.map((data) => {
            return (
              <div className="flex gap-x-1">
                <p className="pl-4 mb-1 font-semibold text-zinc-300">
                  {directionToEmoji(data.direction)}
                </p>
                <p className="pl-4 mb-1 font-semibold text-zinc-300"> {data.country}</p>
              </div>
            )
          })}
      </div>
    </div>
  )  
}
