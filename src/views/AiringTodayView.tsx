import type { tvType } from "../core/types";
import { useGetData } from "../hooks/useGetData";


export const AiringTodayView = () => {
    const data = useGetData<tvType>(`'https://api.themoviedb.org/3/tv/airing_today?api_key=`);
    if (!data) {    
        return <div>Loading...</div>;
     }
    return (

    <div>
        {data.results.map((tvShow) => (
            <div key={tvShow.id}>
                <h3>{tvShow.original_name}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt={tvShow.original_name} />
            </div>
        ))}
    </div>
  ) 
}