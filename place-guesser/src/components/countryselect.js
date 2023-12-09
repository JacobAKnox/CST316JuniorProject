'use client'

import React, {useState, useEffect} from 'react'
import CountryItem from './countryitem';
import { make_guess } from '@/game/game';
import { signal_event } from '@/lib/events';

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default function CountrySearchBox() {
    const [searchInput, setSearchInput] = useState("");
    const [country, setCountry] = useState({});
    const [tempHide, setTempHide] = useState(false);
    const [validCountry, setValidCountry] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("/api/countries")
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [])

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
                rounded-3xl max-h-56 px-5 py-1 m-2 overflow-y-auto">
                    {
                        countries
                        .filter((country) => {
                            return country.name.toLocaleLowerCase().match(escapeRegExp(searchInput.toLowerCase()))
                        })
                        .slice(0, 6)
                        .map((country) => {
                            return <CountryItem key={country.id} country={country} onSelect={selectGuess}/>
                        })
                    }
                </ul>
            }
        </div>
    );
}
