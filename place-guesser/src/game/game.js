import React, { useState } from 'react';
import StatisticsModal from '../app/StatisticsModal'; 

export function make_guess(goal, guess, setGuessCount, guessCount, setShowStats) {
    if (guess.id === goal.id) {
        winGame(setShowStats);
    } else {
        setGuessCount(guessCount + 1);
        if (guessCount >= maxGuesses) {
            loseGame(setShowStats);
        }
    }
}

function winGame(setShowStats) {
    console.log("You win");
    setShowStats(true);
}

function loseGame(setShowStats) {
    console.log("Game Over");
    setShowStats(true);
}

function Game() {
    const [goal, setGoal] = useState({ name: "Andorra", id: 1 });
    const [guessCount, setGuessCount] = useState(0);
    const [showStats, setShowStats] = useState(false);
    const maxGuesses = 5;

    return (
        <div>
            <button onClick={() => makeGuess(goal, { id: 2 }, setGuessCount, guessCount, setShowStats)}>Guess</button>
            {showStats && <StatisticsModal setShowStats={setShowStats} score={guessCount} />}
        </div>
    );
}

export default Game;
