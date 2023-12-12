// use this for game logic and state
import Cookies from 'js-cookie'
import { signal_event } from '@/lib/events';
import {addGuess} from '../components/infopanel'
import { convert_bounds, convert_latlng } from '@/lib/geoconversions';
import { v4 as uuidv4 } from 'uuid';

let goal = {Country: "Andorra", ForiegnPlace: "Angola", CountryId: 1}
let puzzle = {USPlace: "Angola", State: "New York"}
export let guess_count = 0
export const max_guesses = 5;
export let game_won = false;

let puzzle_retrived = false;

async function prepare() {
    await fetch(`/api/puzzles`)
    .then(res => res.json())
    .then(res => {
        goal.Country = res.puzzle[0].Country
        goal.ForiegnPlace = res.puzzle[0].ForiegnPlace
        goal.CountryId = res.puzzle[0].CountryId
        puzzle.USPlace = res.puzzle[0].USPlace
        puzzle.State = res.puzzle[0].State
    })
    
    await fetch(`/api/countries/location?name=${goal.Country}`)
    .then(res => res.json())
    .then(res => {
        goal.latitude = res.location.lat
        goal.longitude = res.location.lng
        goal.latlong = convert_latlng(res.location)
    })
    await fetch(`/api/countries/bounds?name=${goal.Country}`)
    .then(res => res.json())
    .then(res => {4
        goal.bounds = convert_bounds(res.bounds)
    })
    await fetch(`/api/countries/bounds?name=${puzzle.State + " State"}`)
    .then(res => res.json())
    .then(res => {
        puzzle.bounds = convert_bounds(res.bounds)
    })
    await fetch(`/api/countries/location?name=${puzzle.USPlace + " " + puzzle.State}`)
    .then(res => res.json())
    .then(res => {
        puzzle.latlong = convert_latlng(res.location)
    })
}

export async function get_goal() {
    if (!puzzle_retrived) {
        await prepare()
        puzzle_retrived = true
    }
    return goal;
}

export async function get_puzzle() {
    if (!puzzle_retrived) {
        await prepare()
        puzzle_retrived = true
    }
    return puzzle
}

export function make_guess(guess) {
    guess_count++;
    if (guess.id === goal.CountryId) {
        win_game();
        return;
    }

    if (guess_count >= max_guesses) {
        lose_game();
        return;
    }
    addGuess(guess, goal); // add country to the info panel
    signal_event("guess_made", guess);
}


export function getGuessCount() {
    return guess_count;
}

export function win_game() {
    // say you won, then stats
    console.log("win")
    game_won = true;
    signal_event("game_over", goal)
    map_udpate(goal)
    finish_game()
}
export function lose_game() {
    // show answer then stats 
    console.log("lose")
    signal_event("game_over", goal)
    map_udpate(goal)
    finish_game()
}

async function finish_game() {
  let userid = Cookies.get('userid')
  const current_date = new Date()
  const current_year = current_date.getFullYear()
  const current_month = current_date.getMonth()+1
  const current_day = current_date.getDate()
  
  if (userid == null) {
    userid = uuidv4();
    Cookies.set('userid', userid, { expires: 365 })
  }

  const response = await fetch('/api/save_scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: userid, 
      score: guess_count,
      date: {
        year: current_year,
        month: current_month,
        day: current_day
      }
    }),
  })
}

export async function isPlayedToday() {
  return false
  let userid = Cookies.get('userid')
  const current_date = new Date()
  const current_year = current_date.getFullYear()
  const current_month = current_date.getMonth()+1
  const current_day = current_date.getDate()

  if (typeof userid !== 'undefined') {
    const response = await fetch(`/api/get_scores?userid=${userid}`, {
      method: 'GET'
    })
    const response_data = await response.json()
    let userscores_list = response_data.userscores

    for (const score of userscores_list) {
      if (score.date.year == current_year &&
          score.date.month == current_month &&
          score.date.day == current_day) {
        return true
      }
    }
  }

  return false
}

function map_udpate(data) {
    signal_event("map_update", data)
}

export function generatePuzzle (list){
    const keys = Object.keys(list)
    let random_number = Math.floor(Math.random() * 1231) + 1;
    const randomKey = keys[random_number];
    console.log(randomKey)
    const randomItem = list[randomKey];
    return {key: randomKey, item: randomItem}
}
