import { useDebounce } from "@/hooks/useDebounce"
import { useState } from "react"


export const SearchView = () => {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 500)
}