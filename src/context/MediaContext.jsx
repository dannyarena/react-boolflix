import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

export function useMedia() {
    return useContext (MediaContext);
}

export function MediaProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    return (
        <MediaContext.Provider value={{ movies, setMovies, query, setQuery}}>
            {children}
        </MediaContext.Provider>
    );
}