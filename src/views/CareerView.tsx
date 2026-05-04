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
  const gridDataResults = data.cast.map((career) => ({
    id: career.id,
    imagePath: career.poster_path || career.profile_path || "",
    primaryText: career.original_name || career.original_title || "",
  }));

  return (
    <div>
      <ImageGrid
        results={gridDataResults}
        onClick={(id) =>
          navigate(
            `/${data.cast.find(
              (mediaType) => mediaType.id === Number(id)
            )}/${id}`
          )
        }
      />
    </div>
  );
};
