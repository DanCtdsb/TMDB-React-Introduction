import { ImageGrid } from "@/components";
import { PERSON_ENDPOINT } from "@/core/constants";
import type { CareerResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const CareerView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useGetData<CareerResponse>(
    `${PERSON_ENDPOINT}/${id}/combined_credits`,
    {},
    [id]
  );
  if (!data) {
    return <div>Loading...</div>;
  }
  const gridDataResults = (data.cast ?? []).map((career, index) => ({
    id: career.id,
    unique_id: `${career.media_type}, ${career.id}, ${index}`,
    imagePath: career.poster_path || career.profile_path || "",
    primaryText: career.original_name || career.original_title || "",
    secondaryText: career.character || "",
  }));

  return (
    <div>
      <ImageGrid
        results={gridDataResults}
        onClick={(clickId) =>
          {const item = data.cast.find((mediaType) => mediaType.id === clickId)
          if (!item) {
            return null;
          }
          navigate(
            `/${item.media_type}/${item.id}`
          );
        }
      }
      />
    </div>
  );
};
