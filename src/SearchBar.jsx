import { useState } from "react";
import axios from "axios";

export default function SearchBar() {
    const [query, setQuery] = useState ('');

        function handleSearch() {
            const API_KEY = `e5dd1dbd92245a50236e0af84095f35a`;
            const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`;
            const tvURL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`;
            axios.get(url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error("Errore nella ricezione dei dati:", error);
            });
        }
        const [movies, setMovies] = useState([]);
    return (
        //input di testo
        <div>
            <input type="text"
            placeholder="Cerca un film o una serie"
            value={query}
            onChange={(event) => setQuery(event.target.value)}/>
            {/* bottone cerca */}
            <button onClick={handleSearch}>Cerca</button>

            {/* risultati in pagina */}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <p><strong>Titolo:</strong>{movie.title}</p>
                        <p><strong>Titolo originale:</strong>{movie.original_title}</p>
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