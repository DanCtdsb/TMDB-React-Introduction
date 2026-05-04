import { LinkGroup } from "@/components"
import { IMAGE_BASE_URL, PERSON_ENDPOINT } from "@/core/constants"
import type { PersonResponse } from "@/core/types"
import { useGetData } from "@/hooks"
import { Outlet, useParams } from "react-router-dom"

export const PersonView = () => {
    const { id } = useParams()
    const data = useGetData<PersonResponse>(`${PERSON_ENDPOINT}/${id}`, {}, [id])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                <img
                    className="w-[140px] h-[210px] object-cover rounded-xl shrink-0"
                    src={`${IMAGE_BASE_URL}${data.profile_path}`}
                    alt={data.name}
                />
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold text-white">{data.name}</h1>
                    <p className="text-[13px] text-white/50 leading-relaxed line-clamp-6">{data.biography}</p>
                    <div className="flex flex-col gap-1">
                        <span className="text-[12px] text-white/30 uppercase tracking-wider">Born · {data.birthday}</span>
                        <span className="text-[12px] text-white/30 uppercase tracking-wider">{data.place_of_birth}</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-4">
                <LinkGroup options={[
                    { label: "Career", to: "career" },
                    { label: "Images", to: "images" },
                ]} />
            </div>

            <Outlet />
        </div>
    )
}