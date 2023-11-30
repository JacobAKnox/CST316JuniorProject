'use client'

import { countries } from '@/data/countries';
import React, {useState} from 'react'
import CountryItem from './countryitem';

export default function CountrySearchBox() {
    const [searchInput, setSearchInput] = useState("");
    const [tempHide, setTempHide] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        setTempHide(false);
    };

    const selectGuess = (guess) => {
        setSearchInput(guess.name)
        setTempHide(true)
    };
 
    return (
        <div className="h-screen flex-1 items-center rounded-3xl justify-cent text-black">
            <input className="w-[600px] px-5 py-3 rounded-t-3xl mb-0 outline-none transition"
            value={searchInput}
            onChange={handleChange}
            placeholder="Input a country..."/>
            {searchInput !== "" && !tempHide &&
                <ul className="relative w-[600px] bg-white
                rounded-b-3xl max-h-56 px-5 py-3 overflow-y-auto mt-0">
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