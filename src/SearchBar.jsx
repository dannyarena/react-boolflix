import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState ('');

        function handleSearch() {
            console.log(`Hai cercato: ${query}`);
        }
    return (
        //input di testo
        <div>
            <input type="text"
            placeholder="Cerca un film o una serie"
            value={query}
            onChange={(event) => setQuery(event.target.value)}/>
            {/* bottone cerca */}
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
}