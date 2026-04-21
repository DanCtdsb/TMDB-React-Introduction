import { ImageGrid } from "@/components/ImageGrid"
import { SEARCH_ENDPOINT } from "@/core/constants"
import type { TelevisionType } from "@/core/types"
import { useDebounce } from "@/hooks/useDebounce"
import { useGetData } from "@/hooks/useGetData"
import { useState } from "react"


export const SearchView = () => {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 500)
    const data = useGetData<TelevisionType>(`${SEARCH_ENDPOINT}`, {query:debouncedQuery}, [debouncedQuery]);
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

            <input type = "search" value = {query} onChange = {(e) => setQuery(e.target.value)} />
            <ImageGrid results = {gridDataResults} />

        </div>
    )
    
}