import { BASE_ENDPOINT} from "@/core/constants";
import type { ReviewsResponse } from "@/core/types";
import { useGetData } from "@/hooks/useGetData";
import { useParams } from "react-router-dom";


export const ReviewsView = () => {
    const { id, mediaType } = useParams();
    const data = useGetData<ReviewsResponse>(`${BASE_ENDPOINT}${mediaType}/${id}/reviews`, {}, [id, mediaType]);

    return (
        <div>
            <h2 className="text-2xl font-bold">Reviews</h2>
            {data?.results.slice(0, 5).map((review) => (
                <div key={review.id} className="mb-4 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold">{review.author}</h3>
                    <p className="text-gray-600">{review.content}</p>
                </div>
            ))}
        </div>
    )
}