import { useGetData } from "../hooks/useGetData";

type Movie = {
    results: Array <{
        id: number;
        original_title: string;
        poster_path: string;
    }>;
}

export const TestView = () => {
    const data = useGetData<Movie>(`https://api.themoviedb.org/3/movie/now_playing?api_key=`);
    if (!data) {    
        return <div>Loading...</div>;
     }
    return (


    <div>
        {data.results.map((movie) => (
            <div key={movie.id}>
                <h3>{movie.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            </div>
        ))}
    </div>
  ) 
}