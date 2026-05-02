import {ButtonGroup, ImageGrid, LinkGroup, Pagination} from "@/components"
import { TRENDING_ENDPOINT } from "@/core/constants"
import type { MediaType } from "@/core/types"
import { useGetData } from "@/hooks"
import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"


export const TrendingView = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState<number>(1);
    const {selection = "movie"} = useParams();
    const interval = searchParams.get("interval") || "day";
    const data = useGetData<MediaType>(`${TRENDING_ENDPOINT}/${selection}/${interval}`, [page, selection], [page, selection, interval]);
      useEffect(() => {
        setPage(1)
      }, [selection])
    if (!data) {    
        return <div>Loading...</div>;
     }
     const gridDataResults = data.results.map((media) => ({
        id: media.id,
        imagePath: media.poster_path || "",
        primaryText: media.original_title || media.original_name || ""
     }));
    return (
        <div>
            <ButtonGroup value= "selection" onClick={(value) => setSearchParams({interval : value})} options={[
                {label: "Day", value: "day"},
                {label: "Week", value: "week"}
            ]}/>
            <LinkGroup  options={[
                {label: "movie", to: `/trending/movie?interval=${interval}`},
                {label: "tv", to: `/trending/tv?interval=${interval}`}
            ]}/>
            <ImageGrid results={gridDataResults} onClick={(id) => navigate(`/${selection}/${id}`)}/>
            <Pagination page={page} maxPage={data.total_pages} onClick={setPage}/>
        </div>
    )
}