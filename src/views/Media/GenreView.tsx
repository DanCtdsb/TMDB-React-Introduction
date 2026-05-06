import { DISCOVER_ENDPOINT, movie_genres, tv_genres } from "@/core/constants";
import type { MediaType } from "@/core/types";
import { useState } from "react";
import { useGetData } from "@/hooks/useGetData";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid, LinkGroup, Pagination } from "@/components";

export const GenreView = () => {
  const navigate = useNavigate();
  const { mediaType, genreId } = useParams();
  const [page, setPage] = useState<number>(1);
  const normalizedGenreId = genreId?.toLowerCase();
  const selectedGenre =
    mediaType === "movie"
      ? movie_genres.find((genre) => genre.name.toLowerCase() === normalizedGenreId)
      : tv_genres.find((genre) => genre.name.toLowerCase() === normalizedGenreId);

  const data = useGetData<MediaType>(
    `${DISCOVER_ENDPOINT}/${mediaType}?with_genres=${selectedGenre?.id}`,
    { page },
    [mediaType, genreId, page],
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const gridDataResults = (data.results ?? []).map((media) => ({
    id: media.id,
    imagePath: media.poster_path || media.profile_path || "",
    primaryText: media.original_name || media.original_title || "",
  }));

  const genreOptions =
    mediaType === "movie"
      ? movie_genres.map((genre) => ({
          label: genre.name,
          to: `/genre/movie/${genre.name.toLowerCase()}`,
        }))
      : tv_genres.map((genre) => ({
          label: genre.name,
          to: `/genre/tv/${genre.name.toLowerCase()}`,
        }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <LinkGroup
          options={[
            { label: "Movie", to: `/genre/movie/action`, match: ["/genre/movie"] },
            { label: "TV", to: `/genre/tv/action`, match: ["/genre/tv"] },
          ]}
        />
        <div className="flex flex-wrap gap-1">
          {genreOptions.map((option) => (
            <LinkGroup key={option.to} options={[option]} />
          ))}
        </div>
      </div>

      <ImageGrid
        results={gridDataResults}
        onClick={(id) => navigate(`/${mediaType}/${id}`)}
      />
      <Pagination page={page} maxPage={data.total_pages} onClick={setPage} />
    </div>
  );
};