import { useState } from "react";
import axios from "axios";

export default function SearchBar() {
    const [query, setQuery] = useState ('');

        function handleSearch() {
            const API_KEY = `e5dd1dbd92245a50236e0af84095f35a`;
            const movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`;
            const tvURL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`;
            
            Promise.all([
                axios.get(movieURL),
                axios.get(tvURL)
            ])
                .then(([movieRes, tvRes]) => {
                    const movieResults = movieRes.data.results;
                    const tvResults = tvRes.data.results;

                    const allResult = [
                        ...movieResults.map(item => ({ ...item, media_type: 'movie'})),
                        ...tvResults.map(item => ({ ...item, media_type: 'tv'}))
                        
                    ];
                        // salva tutti i risultati uniti in movies
                    setMovies(allResult);
                })
                .catch(error => {
                    console.error("Errore nella ricezione dei dati")
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