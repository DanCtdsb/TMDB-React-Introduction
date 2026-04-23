import { useNavigate, useParams } from "react-router-dom";
import type { MediaType } from "../core/types";
import { useGetData } from "../hooks/useGetData";
import { ButtonGroup } from "@/components/ButtonGroup";
import { ImageGrid } from "@/components/ImageGrid";
import { SearchView } from "./SearchView";
import { MOVIE_ENDPOINT } from "@/core/constants";
import { Pagination } from "@/components/Pagination";
import { useState } from "react";



export const MoviesView = () => {
    const navigate = useNavigate();
    const { selection = "now_playing" } = useParams();
    const [page, setPage] = useState<number>(1)
    const data = useGetData<MediaType>(`${MOVIE_ENDPOINT}${selection}`, {page}, [selection, page]);
    if (!data) {    
        return <div>Loading...</div>;
     }
     const gridDataResults = data.results.map((movie) => ({
        id: movie.id,
        imagePath: movie.poster_path,
        primaryText: movie.original_title
     }));
    return (
    <div>
    <SearchView></SearchView>
    <ButtonGroup
    value = {selection}
    onClick = {(value) => navigate(`/movies/category/${value}`)}
    options = {[
        { label: "Now Playing", value: "now_playing" },
        { label: "Popular", value: "popular" },
        { label: "Top Rated", value: "top_rated" },
        { label: "Upcoming", value: "upcoming" },
    ]}
    />
    <ImageGrid results = {gridDataResults}></ImageGrid>
    <Pagination page= {page} maxPage={data.total_pages}onClick={setPage}></Pagination>
    </div>
  ) 
}