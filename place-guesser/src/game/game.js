// use this for game logic and state
import {addGuess} from '../components/infopanel'

let goal = {name: "Andorra", id: 1}
let guess_count = 0
const max_guesses = 5;

export function make_guess(guess) {
    if (guess.id === goal.id) {
        win_game();
        return;
    }
    guess_count++;
    // add country to the info panel here,
    addGuess(guess)
    console.log(guess_count)
    if (guess_count >= max_guesses) {
        lose_game();
    }
}

export function win_game() {
    // say you won, then stats
    console.log("You win")
}
export function lose_game() {
    // show answer then stats 
    console.log("Game Over")
}
