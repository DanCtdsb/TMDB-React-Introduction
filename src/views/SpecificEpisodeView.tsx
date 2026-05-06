import { Button, KeyValueLabels } from "@/components";
import { IMAGE_BASE_URL, TELEVISION_ENDPOINT } from "@/core/constants";
import type { SpecificEpisodesResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";


export const SpecificEpisodeView = () => {
    const navigate = useNavigate();
    const {id, seasonNumber, episode} = useParams();
    const data = useGetData<SpecificEpisodesResponse>(`${TELEVISION_ENDPOINT}/${id}/season/${seasonNumber}/episode/${episode}`, {}, [id, seasonNumber, episode]);
    
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="w-fit">
                <Button onClick={() => navigate(-1)}>Back</Button>
            </div>
            <h1>{data.name}</h1>
            <p>{data.overview}</p>
            <img
                className="w-[140px] h-[210px] object-cover rounded-xl shrink-0"
                src={`${IMAGE_BASE_URL}${data.still_path}`}
                alt={data.name}
            />
            <KeyValueLabels label="Rating" value={data.vote_average} />
        </div>
    )
}