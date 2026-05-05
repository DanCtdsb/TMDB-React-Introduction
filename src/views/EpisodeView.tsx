import { Button, ImageGrid } from "@/components";
import { TELEVISION_ENDPOINT } from "@/core/constants";
import type { EpisodesResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const EpisodeView = () => {
    const navigate = useNavigate();
    const { id, seasonNumber } = useParams();
    const data = useGetData<EpisodesResponse>(`${TELEVISION_ENDPOINT}/${id}/season/${seasonNumber}`, {}, [id, seasonNumber]);

    if ( !data) {
        return <div>Loading...</div>;
    }

    const gridDataResults = data.episodes.map((episode) => ({
        id: episode.id,
        imagePath: episode.still_path || "",
        primaryText: episode.name || "",
        secondaryText: episode.overview || "",
        tertiaryText: episode.vote_average || "",
    }));

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="w-fit">
                    <Button onClick={() => navigate(-1)}>Back</Button>
                </div>
                <h1 className="text-2xl font-semibold text-white">{data.name}</h1>
                <p className="text-[13px] text-white/50 leading-relaxed">{data.overview}</p>
                <span className="text-[12px] text-white/30 uppercase tracking-wider">Air Date · {data.air_date}</span>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                <h2 className="text-[13px] text-white/40 uppercase tracking-wider">Episodes</h2>
                <ImageGrid
                    results={gridDataResults}
                    onClick={(seasonNumber) => navigate(`/tv/${id}/season/${seasonNumber}`)}
                />
            </div>
        </div>
    );
};