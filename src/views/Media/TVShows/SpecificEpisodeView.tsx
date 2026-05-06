import { Button, KeyValueLabels } from "@/components";
import { IMAGE_BASE_URL, TELEVISION_ENDPOINT } from "@/core/constants";
import type { SpecificEpisodesResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";

export const SpecificEpisodeView = () => {
  const navigate = useNavigate();
  const { id, seasonNumber, episode } = useParams();
  const data = useGetData<SpecificEpisodesResponse>(
    `${TELEVISION_ENDPOINT}/${id}/season/${seasonNumber}/episode/${episode}`,
    {},
    [id, seasonNumber, episode],
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="w-fit">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>

      <div className="flex gap-6">
        <img
          className="w-[240px] h-[160px] object-cover rounded-xl shrink-0"
          src={`${IMAGE_BASE_URL}${data.still_path}`}
          alt={data.name}
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold text-white">{data.name}</h1>
          <p className="text-[13px] text-white/50 leading-relaxed">
            {data.overview}
          </p>
          <div className="flex items-center gap-2">
            <GoStarFill className="text-white/30" />
            <KeyValueLabels label="Rating" value={data.vote_average} />
          </div>
        </div>
      </div>
    </div>
  );
};
