import { LinkGroup, KeyValueLabels, Modal} from "@/components/index"
import { BASE_ENDPOINT, IMAGE_BASE_URL, ORIGINAL_IMAGE_BASE_URL } from "@/core/constants"
import type {MediaResponse } from "@/core/types"
import { useGetData } from "@/hooks/useGetData"
import { Outlet, useNavigate, useParams } from "react-router-dom"

export const MovieView = () => {
    const navigate = useNavigate()
    const { id, mediaType } = useParams()
    const data = useGetData<MediaResponse>(`${BASE_ENDPOINT}/${mediaType}/${id}`, {}, [id, mediaType])

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