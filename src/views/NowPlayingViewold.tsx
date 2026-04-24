import { useSearchParams } from "react-router-dom";
import type { MediaType } from "../core/types";
import { useGetData } from "../hooks/useGetData";
import { ButtonGroup } from "@/components/ButtonGroup";
import { ImageGrid } from "@/components/ImageGrid";



export const NowPlayingViewold = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selection = searchParams.get("selection") || "now_playing";
    const data = useGetData<MediaType>(`https://api.themoviedb.org/3/movie/${selection}`, {}, [selection]);
    if (!data) {    
        return <div>Loading...</div>;
     }
     const gridDataResults = data.results.map((movie) => ({
        id: movie.id,
        imagePath: movie.poster_path || "",
        primaryText: movie.original_title || ""
     }));
    return (
    <div>
    <ButtonGroup
    value = {selection}
    onClick = {(value) => setSearchParams({ selection: value })}
    options = {[
        { label: "Now Playing", value: "now_playing" },
        { label: "Top Rated", value: "top_rated" },
        { label: "Upcoming", value: "upcoming" },
    ]}
    />
    <ImageGrid results = {gridDataResults}></ImageGrid>  
    </div>
  ) 
}