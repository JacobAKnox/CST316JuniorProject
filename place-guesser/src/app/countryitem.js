import { make_guess } from "@/game/game";

export default function CountryItem({country, onSelect}) {
    const handleClick = (e) => {
        onSelect(country)
    };
    
    return (
        <li className="hover:bg-slate-300"
        onClick={handleClick}>
            {country.name}
        </li>
    )
}