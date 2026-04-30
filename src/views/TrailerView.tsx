import { MOVIE_ENDPOINT } from "@/core/constants"
import type { TrailerResponse } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { useParams } from "react-router-dom"


export const TrailerView = () => {
    const { id } = useParams()
    const data = useGetData<TrailerResponse>(`${MOVIE_ENDPOINT}${id}/videos`, {}, [id])

    const trailerVideo =
        data?.videos?.results.slice(0, 2).filter(
          (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.name?.toLowerCase().includes('official')
        ) || data?.videos?.results.filter((video) => video.site === 'YouTube' && video.type === 'Trailer');
    console.log(trailerVideo)
    return (
        <div>
            <h2 className="text-2xl font-bold">Trailers</h2>

            <div>
                {trailerVideo && (
                    trailerVideo.map((video) => 
                        <iframe
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