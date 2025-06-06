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

            {/* risultati in pagina */}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <p><strong>Titolo:</strong>{movie.title || movie.name}</p>
                        <p><strong>Titolo originale:</strong>{movie.original_title || movie.original_name}</p>
                        <p><strong>Lingua:</strong><img src={`https://flagcdn.com/16x12/${movie.original_language}.png`} alt={movie.original_language}  style={{marginLeft: '5px'}}
                        />
                        </p>
                        <p><strong>Voto:</strong>{movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}