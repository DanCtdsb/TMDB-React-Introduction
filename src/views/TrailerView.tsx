import { BASE_ENDPOINT} from "@/core/constants"
import type { TrailerResponse } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { useParams } from "react-router-dom"


export const TrailerView = () => {
    const { id, mediaType } = useParams()
    const data = useGetData<TrailerResponse>(`${BASE_ENDPOINT}${mediaType}/${id}/videos`, {}, [id, mediaType])

    const allVideos = data?.results || [];

    const officialTrailers = allVideos.filter(
        (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.name?.toLowerCase().includes("official")
    ).slice(0, 2);

    const trailerVideo = officialTrailers.length > 0 ? officialTrailers : allVideos.filter(
            (video) =>
            video.site === "YouTube" &&
            video.type === "Trailer"
        ).slice(0, 2);

    return (
        <div>
            <h2 className="text-2xl font-bold">Trailers</h2>

            <div>
                {trailerVideo && (
                    trailerVideo.map((video) => 
                        <iframe
                            key = {video.key}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )
                )}
                </div>
        </div>
    )
}