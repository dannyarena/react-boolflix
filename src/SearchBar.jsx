import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState ('');
    return (
        //input di testo
        <div>
            <input type="text"
            placeholder="Cerca un film o una serie"
            value={query}
            onChange={(event) => setQuery(event.target.value)}/>
        </div>
    );
}