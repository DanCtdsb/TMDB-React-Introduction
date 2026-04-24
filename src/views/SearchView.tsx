import { ImageGrid } from "@/components/ImageGrid";
import { Pagination } from "@/components/Pagination";
import { SEARCH_ENDPOINT } from "@/core/constants";
import type { MediaType } from "@/core/types";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetData } from "@/hooks/useGetData";
import { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";

export const SearchView = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("q") || "";
  const debouncedQuery = useDebounce(queryValue, 500);
    const [page, setPage] = useState<number>(1)
  const mediaType = searchParams.get("media") || "movie";
  const data = useGetData<MediaType>(
    `${SEARCH_ENDPOINT}/${mediaType}`,
    { query: debouncedQuery, page},
    [debouncedQuery, mediaType, page],
  );
  useEffect(() => {
    setPage(1)
  }, [queryValue])
  
  if (!data) {
    return <div>Loading...</div>;
  }

  const gridDataResults = data.results.map((media) => ({
    id: media.id,
    imagePath: media.poster_path || media.profile_path || "",
    primaryText: media.original_name || media.original_title || "",
  }));
  return (
    <div>
      <ImageGrid results={gridDataResults} />
        <Pagination page= {page} maxPage={data.total_pages}onClick={setPage}></Pagination>
    </div>
  );
};
