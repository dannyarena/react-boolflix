import { useState } from "react";
import axios from "axios";
import { useMedia } from "./context/MediaContext";

export default function SearchBar() {
    const { query, setQuery, movies, searchMedia } = useMedia();

    return (
        //input di testo
        <div>
            <input type="text"
            placeholder="Cerca un film o una serie"
            value={query}
            onChange={(event) => setQuery(event.target.value)}/>
            {/* bottone cerca */}
            <button onClick={() => searchMedia(query)}>Cerca</button>
        </div>
    );
}