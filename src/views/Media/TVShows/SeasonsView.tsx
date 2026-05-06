import { ImageGrid } from "@/components";
import { TELEVISION_ENDPOINT } from "@/core/constants";
import type { SeasonsResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const SeasonsView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useGetData<SeasonsResponse>(`${TELEVISION_ENDPOINT}/${id}`, {}, [
    id,
  ]);
  if (!data) {
    return <div>Loading...</div>;
  }

  const gridDataResults = data.seasons.map((season) => ({
    id: season.season_number,
    imagePath: season.poster_path || "",
    primaryText: season.name || "",
    secondaryText: season.episode_count || "",
    tertiaryText: season.vote_average || "",
  }));
  return (
    <div className="flex flex-col gap-6 pt-6">
      <h2 className="text-xl font-semibold text-white">Seasons</h2>
      <ImageGrid
        results={gridDataResults}
        onClick={(seasonNumber) => {
          navigate(`/tv/${id}/seasons/${seasonNumber}`);
        }}
      />
    </div>
  );
};
