import { ImageGrid } from "@/components";
import { BASE_ENDPOINT } from "@/core/constants";
import type { CreditsResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const CreditsView = () => {
  const navigate = useNavigate();
  const { id, mediaType } = useParams();
  const data = useGetData<CreditsResponse>(
    `${BASE_ENDPOINT}/${mediaType}/${id}/credits`,
    {},
    [id, mediaType],
  );

  const gridDataResults = (data?.cast ?? []).map((credit) => ({
    id: credit.id,
    imagePath: credit.profile_path,
    primaryText: credit.name,
    secondaryText: credit.character,
  }));

  return (
    <div className="flex flex-col gap-6 pt-6">
      <h2 className="text-xl font-semibold text-white">Credits</h2>
      <ImageGrid
        results={gridDataResults}
        onClick={(id) => navigate(`/person/${id}`)}
      />
    </div>
  );
};
