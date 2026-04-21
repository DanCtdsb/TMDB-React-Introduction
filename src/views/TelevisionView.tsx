import { useNavigate, useParams } from "react-router-dom";
import type { TelevisionType } from "../core/types";
import { useGetData } from "../hooks/useGetData";
import { ButtonGroup } from "@/components/ButtonGroup";
import { ImageGrid } from "@/components/ImageGrid";



export const TelevisionView = () => {
    const navigate = useNavigate();
    const { selection = "airing_today" } = useParams();
    const data = useGetData<TelevisionType>(`https://api.themoviedb.org/3/tv/${selection}`, {}, [selection]);
    if (!data) {    
        return <div>Loading...</div>;
     }
     const gridDataResults = data.results.map((television) => ({
        id: television.id,
        imagePath: television.poster_path,
        primaryText: television.original_name
     }));
    return (
    <div>
    <ButtonGroup
    value = {selection}
    onClick = {(value) => navigate(`/television/category/${value}`)}
    options = {[
        { label: "Airing Today", value: "airing_today" },
        { label: "On the Air", value: "on_the_air" },
        { label: "Popular", value: "popular" },
        { label: "Top Rated", value: "top_rated" },
    ]}
    />
    <ImageGrid results = {gridDataResults}></ImageGrid>
    </div>
  ) 
}