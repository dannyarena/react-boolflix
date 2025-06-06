import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

export function useMedia() {
    return useContext (MediaContext);
}

export function MediaProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    function searchMedia() {
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

    return (
        <MediaContext.Provider value={{ movies, setMovies, query, setQuery, searchMedia}}>
            {children}
        </MediaContext.Provider>
    );
}