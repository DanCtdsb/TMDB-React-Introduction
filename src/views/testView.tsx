import axios from "axios";
import { API_KEY } from "../core/constants";
import { useEffect, useState } from "react";

type Movie = {
    id : number;
    original_title : string;
    poster_path : string;
}

export const TestView = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);
  return (
    <div>
        {movies.map((movie) => (
            <div key={movie.id}>
                <h3>{movie.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            </div>
        ))}
    </div>
  ) 
}