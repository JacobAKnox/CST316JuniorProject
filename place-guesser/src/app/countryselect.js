'use client'

import { countries } from '@/data/countries';
import React, {useState} from 'react'
import CountryItem from './countryitem';
import { make_guess } from '@/game/game';

export default function CountrySearchBox() {
    const [searchInput, setSearchInput] = useState("");
    const [country, setCountry] = useState({});
    const [tempHide, setTempHide] = useState(false);
    const [validCountry, setValidCountry] = useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        setTempHide(false)
        setValidCountry(false)
    };

    const selectGuess = (guess) => {
        setSearchInput(guess.name)
        setCountry(guess)
        setTempHide(true)
        setValidCountry(true)
    };

    const submitGuess = (e) => {
        make_guess(country)
    }
 
    return (
        <div className="h-screen flex-1 items-center justify-cent text-black">
            <div className="w-[600px] px-5 py-1 flex bg-white rounded-3xl m-2 outline-none transition">
                <input className="grow focus:outline-none"
                value={searchInput}
                onChange={handleChange}
                placeholder="Input a country..."/>
                <button
                onClick={submitGuess}
                disabled={!validCountry}
                className="hover:bg-indigo-800 bg-indigo-700 text-white p-2 m-0 rounded-3xl disabled:bg-slate-200 disabled:text-slate-400">
                    Submit
                </button>
            </div>
            {searchInput !== "" && !tempHide &&
                <ul className="relative w-[600px] bg-white
                rounded-3xl max-h-56 px-5 py-3 m-2 overflow-y-auto">
                    {
                        countries
                        .filter((country) => {
                            return country.name.toLocaleLowerCase().match(searchInput.toLowerCase())
                        })
                        .map((country) => {
                            return <CountryItem key={country.id} country={country} onSelect={selectGuess}/>
                        })
                    }
                </ul>
            }
        </div>
    );
}