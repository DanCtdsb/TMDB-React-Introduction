import { ImageGrid } from "@/components/ImageGrid";
import { SEARCH_ENDPOINT } from "@/core/constants";
import type { MediaType } from "@/core/types";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetData } from "@/hooks/useGetData";
import {useSearchParams } from "react-router-dom";

export const SearchView = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("q") || "";
  const debouncedQuery = useDebounce(queryValue, 500);
  const mediaType = searchParams.get("media") || "movie";
  const data = useGetData<MediaType>(
    `${SEARCH_ENDPOINT}/${mediaType}`,
    { query: debouncedQuery },
    [debouncedQuery, mediaType],
  );
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
    </div>
  );
};
