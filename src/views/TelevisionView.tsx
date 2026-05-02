import { useNavigate, useParams } from "react-router-dom";
import type { MediaType} from "@/core/types";
import { useGetData } from "@/hooks";
import { ButtonGroup, ImageGrid, Pagination} from "@/components";;
import { TELEVISION_ENDPOINT } from "@/core/constants";
import { useEffect, useState } from "react";



export const TelevisionView = () => {
    const navigate = useNavigate();
    const { selection = "airing_today" } = useParams();
    const [page, setPage] = useState<number>(1)
    const data = useGetData<MediaType>(`${TELEVISION_ENDPOINT}/${selection}`, {page}, [selection, page]);
      useEffect(() => {
        setPage(1)
      }, [selection])
    if (!data) {    
        return <div>Loading...</div>;
     }
     const gridDataResults = data.results.map((television) => ({
        id: television.id,
        imagePath: television.poster_path || "",
        primaryText: television.original_name || ""
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
    <ImageGrid results = {gridDataResults} onClick={(id) => navigate(`/tv/${id}`)}/>
    <Pagination page= {page} maxPage={data.total_pages}onClick={setPage}></Pagination>
    </div>
  ) 
}