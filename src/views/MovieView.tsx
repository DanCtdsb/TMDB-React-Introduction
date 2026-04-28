import { LinkGroup } from "@/components/LinkGroup"
import { KeyValueLabels } from "@/components/KeyValueLabels"
import { Modal } from "@/components/Modal"
import { MOVIE_ENDPOINT } from "@/core/constants"
import type {MovieRespsonse } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { Outlet, useNavigate, useParams } from "react-router-dom"

export const MovieView = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const data = useGetData<MovieRespsonse>(`${MOVIE_ENDPOINT}${id}`, { append_to_response: 'videos' }, [id])

    const trailerVideo =
    data?.videos?.results.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.name?.toLowerCase().includes('official')
    ) || data?.videos?.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer');

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Modal onClose={() => navigate(-1)}>
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
                <div>
                    {trailerVideo && (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                            title={trailerVideo.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
                <KeyValueLabels label="Release Date" value={data.release_date} />
                <KeyValueLabels label="Rating" value={data.vote_average} />
                <LinkGroup options={[
                    { label: "credits", to: "credits" },
                    { label: "reviews", to: "reviews" },
                ]}/>
                <Outlet/>
            </Modal>
        </div>
    )
}