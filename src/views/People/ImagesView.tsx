import { ImageGrid } from "@/components/ImageGrid";
import { PERSON_ENDPOINT } from "@/core/constants";
import type { PersonImageResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { useParams } from "react-router-dom";

export const ImagesView = () => {
  const { id } = useParams();
  const data = useGetData<PersonImageResponse>(
    `${PERSON_ENDPOINT}/${id}/images`,
    {},
    [id],
  );

  const gridDataResults = (data?.profiles ?? []).map((profile, index) => ({
    id: index,
    unique_id: profile.file_path,
    imagePath: profile.file_path || "",
  }));

  return (
    <div className="pt-6">
      <ImageGrid results={gridDataResults} />
    </div>
  );
};
