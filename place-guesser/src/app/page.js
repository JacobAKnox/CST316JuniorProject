import CountrySearchBox from './countryselect'
import RootLayout from './layout'
import GameLink from './gameLink'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <html>
        <head>
          <title>Place Guesser</title>
        </head>
        <body>
          <div class="topBar">
            <div class="gameIcon-row">
              <img src="icons/game-icon-100px.png" alt="FAIL" />
            </div>
          </div>
          <div class="homePageTitleContainer">
            <p class="homePageTitle">Welcome to</p>
            <p class="homePageTitle">Place Guesser</p>
            <div class="playButtonContainer">
              <GameLink></GameLink>
            </div>
          </div>
        </body>
      </html>
    </main>
  )
}
