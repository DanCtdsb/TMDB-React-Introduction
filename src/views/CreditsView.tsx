import { ImageGrid } from "@/components";
import { BASE_ENDPOINT } from "@/core/constants";
import type { CreditsResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";


export const CreditsView = () => {
    const navigate = useNavigate();
    const { id, mediaType} = useParams();
    const data = useGetData<CreditsResponse>(`${BASE_ENDPOINT}/${mediaType}/${id}/credits`, {}, [id, mediaType]);
    const gridDataResults = data?.cast.map((credit) => ({
        id: credit.id,
        imagePath: credit.profile_path || "",
        primaryText: credit.name || "",
        secondaryText: credit.character || ""
    })) || [];
    return (
        <div>
            <h2 className="text-2xl font-bold">Credits</h2>
            <ImageGrid results={gridDataResults} onClick={(id) => {navigate(`/person/${id}`)}}/>
        </div>
    )
}