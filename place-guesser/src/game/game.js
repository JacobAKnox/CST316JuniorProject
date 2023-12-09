// use this for game logic and state
import { signal_event } from '@/lib/events';
import {addGuess} from '../components/infopanel'
import { convert_bounds, convert_latlng } from '@/lib/geoconversions';

export let goal = {Country: "Andorra", ForiegnPlace: "Angola", CountryId: 1}
export let puzzle = {USPlace: "Angola", State: "New York"}
let guess_count = 0
export const max_guesses = 5;

prepare()

function prepare() {
    fetch(`/api/countries/location?name=${goal.Country}`)
    .then(res => res.json())
    .then(res => {
        goal.latitude = res.location.lat
        goal.longitude = res.location.lng
    })
    fetch(`/api/countries/bounds?name=${goal.Country}`)
    .then(res => res.json())
    .then(res => {
        goal.bounds = convert_bounds(res.bounds)
    })
    fetch(`/api/countries/bounds?name=${puzzle.State + " State"}`)
    .then(res => res.json())
    .then(res => {
        puzzle.bounds = convert_bounds(res.bounds)
        signal_event("init_bounds")
    })
    fetch(`/api/countries/location?name=${puzzle.USPlace + " " + puzzle.State}`)
    .then(res => res.json())
    .then(res => {
        puzzle.latlong = convert_latlng(res.location)
        signal_event("init_pin")
    })
}

export function make_guess(guess) {
    if (guess.id === goal.CountryId) {
        win_game();
        return;
    }
    guess_count++;
    addGuess(guess); // add country to the info panel

    if (guess_count >= max_guesses) {
        lose_game();
        return;
    }
    signal_event("guess_made", guess);
}


export function getGuessCount() {
    return guess_count;
}

export function win_game() {
    // say you won, then stats
    signal_event("game_over", goal)
    console.log("You win")
}
export function lose_game() {
    // show answer then stats 
    signal_event("game_over", goal)
    console.log("Game Over")
}



export function generatePuzzle (list){
    const keys = Object.keys(list)
    let random_number = Math.floor(Math.random() * 1231) + 1;
    const randomKey = keys[random_number];
    console.log(randomKey)
    const randomItem = list[randomKey];
    return {key: randomKey, item: randomItem}
}
