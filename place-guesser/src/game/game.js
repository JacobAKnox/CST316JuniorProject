// use this for game logic and state
import Cookies from 'js-cookie'
import { signal_event } from '@/lib/events';
import {addGuess} from '../components/infopanel'
import { convert_bounds, convert_latlng } from '@/lib/geoconversions';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export let goal = {Country: "Andorra", ForiegnPlace: "Angola", CountryId: 1}
export let puzzle = {USPlace: "Angola", State: "New York"}
export let guess_count = 0
export const max_guesses = 5;
export let game_won = false;

prepare()

function prepare() {
    fetch(`/api/countries/location?name=${goal.Country}`)
    .then(res => res.json())
    .then(res => {
        goal.latitude = res.location.lat
        goal.longitude = res.location.lng
        goal.latlong = convert_latlng(res.location)
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
        delay_init_bounds()
    })
    fetch(`/api/countries/location?name=${puzzle.USPlace + " " + puzzle.State}`)
    .then(res => res.json())
    .then(res => {
        puzzle.latlong = convert_latlng(res.location)
        delay_init_pin()
    })
}

function delay_init_pin() {
    setTimeout(signal_event, 300, "init_pin")
}

function delay_init_bounds() {
    setTimeout(signal_event, 300, "init_bounds")
}

export function make_guess(guess) {
    guess_count++;
    if (guess.id === goal.CountryId) {
        win_game();
        return;
    }
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
    console.log("win")
    game_won = true;
    signal_event("game_over", goal)
    delay_map_udpate(goal, puzzle)
    finish_game()
}
export function lose_game() {
    // show answer then stats 
    console.log("lose")
    signal_event("game_over", goal)
    delay_map_udpate(goal, puzzle)
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

async function delay_map_udpate(dataa, datab) {
    setTimeout(map_udpate, 200, dataa, datab)
}

function map_udpate(dataa, datab) {
    console.log("UPDATE")
    signal_event("map_update", dataa)
    signal_event("map_updatedisable", datab)
}

export function generatePuzzle (list){
    const keys = Object.keys(list)
    let random_number = Math.floor(Math.random() * 1231) + 1;
    const randomKey = keys[random_number];
    console.log(randomKey)
    const randomItem = list[randomKey];
    return {key: randomKey, item: randomItem}
}
