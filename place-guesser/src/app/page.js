'use client'

import GameLink from './gameLink'
import {useEffect, useState } from 'react'
import { isPlayedToday } from '../game/game'

export default function Home() {

  const [hasPlayedToday, setHasPlayedToday] = useState([])

  async function checkHasPlayedToday() {
    let has_played_today = await isPlayedToday()
    setHasPlayedToday(has_played_today)
  }

  useEffect(() => {
    checkHasPlayedToday()
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="topBar">
        <div className="gameIcon-row">
          <img src="icons/game-icon-100px.png" alt="FAIL" />
        </div>
      </div>
      <div className="homePageTitleContainer">
        <p className="homePageTitle">Welcome to</p>
        <p className="homePageTitle">Place Guesser</p>
        <div className="playButtonContainer">
          {hasPlayedToday ? (
            <p>You played today! Click the Show Stats button above to see your score!</p>
              ) : (
            <GameLink></GameLink>
          )}
        </div>
      </div>
    </main>
  )
}
