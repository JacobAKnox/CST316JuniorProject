import GameLink from './gameLink'
import {useEffect, useState } from 'react'
import { isPlayedToday } from '../game/game'

export default function PlayButton() {

    const [hasPlayedToday, setHasPlayedToday] = useState([])

    async function checkHasPlayedToday() {
        let has_played_today = await isPlayedToday()
        setHasPlayedToday(has_played_today)
    }

    useEffect(() => {
        checkHasPlayedToday()
    })

    return (
    <div className="playButtonContainer">
          {hasPlayedToday ? (
            <p>You played today! Click the Show Stats button above to see your score!</p>
              ) : (
            <GameLink></GameLink>
          )}
    </div>
    )
}