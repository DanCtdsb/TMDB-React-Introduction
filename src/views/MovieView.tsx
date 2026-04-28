import { LinkGroup } from "@/components/LinkGroup"
import { KeyValueLabels } from "@/components/KeyValueLabels"
import { Modal } from "@/components/Modal"
import { IMAGE_BASE_URL, MOVIE_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from "@/core/constants"
import type {MediaResponse } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { Outlet, useNavigate, useParams } from "react-router-dom"

export const MovieView = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const data = useGetData<MediaResponse>(`${MOVIE_ENDPOINT}${id}`, { append_to_response: 'videos' }, [id])

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
                <div
                    className="h-[420px] bg-cover bg-center rounded-2xl"
                    style={{
                        backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
                    }}
                />
                <img className="w-[220px] h-[330px] object-cover rounded-xl" src={`${IMAGE_BASE_URL}${data.poster_path}`} alt={data.title} />
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
                    { label: "Credits", to: "credits" },
                    { label: "Trailer", to: "trailer" },
                    { label: "Reviews", to: "reviews" },
                ]}/>
                <Outlet/>
            </Modal>
        </div>
    )
}