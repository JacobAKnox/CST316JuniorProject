'use client'

import { countries } from '@/data/countries';
import React, {useState} from 'react'

export default function CountrySearchBox() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    return (
        <div className="h-screen flex items-center justify-center text-black">
            <div className="relative">
                <input className="w-[600px] px-5 py-3 rounded-full 
                border-2 border-gray-500 focus:border-gray-700 
                outline-none transition"
                value={searchInput}
                onChange={handleChange}
                placeholder="Input a country..."/>
                {searchInput !== "" &&
                <div className="absolute mt-1 w-full p-2 bg-white shadow-lg
                 rounded-bl rounded-br max-h-56 overflow-y-auto">
                    <ul>
                        {
                            countries
                            .filter((country) => {
                                return country.match(searchInput) && searchInput !== ""
                            })
                            .map((country) => {
                               return <li>{country}</li>
                            })
                        }
                    </ul>
                </div>
                }
            </div>
        </div>
    );
}