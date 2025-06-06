import { useMedia } from "./context/MediaContext";


export default function ResultSection() {
    const { movies } = useMedia();
    
     return (
        <div>
            {/* risultati in pagina */}
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.poster_path && (
                            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                             alt= {movie.title || movie.name} /> )}
                        <p><strong>Titolo:</strong>{movie.title || movie.name}</p>
                        <p><strong>Titolo originale:</strong>{movie.original_title || movie.original_name}</p>
                        <p><strong>Lingua:</strong>
                            <img src={`https://flagcdn.com/16x12/${movie.original_language}.png`} alt={movie.original_language}  style={{marginLeft: '5px'}} />
                        </p>
                        <p><strong>Voto:</strong>{movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}