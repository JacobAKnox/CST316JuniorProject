// use this for game logic and state

let goal = {name: "Canada", id: 1}

export function make_guess(guess) {
    console.log(guess.id === goal.id)
}