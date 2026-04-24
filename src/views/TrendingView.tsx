import { ButtonGroup } from "@/components/ButtonGroup"
import { ImageGrid } from "@/components/ImageGrid"
import { LinkGroup } from "@/components/LinkGroup"
import { Pagination } from "@/components/Pagination"
import { TRENDING_ENDPOINT } from "@/core/constants"
import type { MediaType } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"


export const TrendingView = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState<number>(1);
    const {selection = "movies"} = useParams();
    const interval = searchParams.get("interval") || "day";
    const data = useGetData<MediaType>(`${TRENDING_ENDPOINT}/${selection}/${interval}`, [page, selection], [page, selection, interval]);

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
                {label: "movie", to: "/trending/movie"},
                {label: "tv", to: "/trending/tv"}
            ]}/>
            <ImageGrid results={gridDataResults}/>
            <Pagination page={page} maxPage={data.total_pages} onClick={setPage}/>
        </div>
    )
}