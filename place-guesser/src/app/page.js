import GameLink from './gameLink'

export default function Home() {
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
          <GameLink></GameLink>
        </div>
      </div>
    </main>
  )
}
