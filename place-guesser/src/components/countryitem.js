export default function CountryItem({country, onSelect}) {
    const handleClick = (e) => {
        onSelect(country)
    };
    
    return (
        <li className="hover:bg-slate-300 rounded-3xl m-0 p-1"
        onClick={handleClick}>
            {country.name}
        </li>
    )
}