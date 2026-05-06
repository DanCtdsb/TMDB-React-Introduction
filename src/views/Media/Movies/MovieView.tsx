import { LinkGroup, KeyValueLabels } from "@/components";
import {
  BASE_ENDPOINT,
  IMAGE_BASE_URL,
  ORIGINAL_IMAGE_BASE_URL,
} from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useGetData } from "@/hooks";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { CreditsView, SeasonsView } from "@/views";

export const MovieView = () => {
  const { id, mediaType } = useParams();
  const location = useLocation();
  const data = useGetData<MediaResponse>(
    `${BASE_ENDPOINT}/${mediaType}/${id}`,
    {},
    [id, mediaType]
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const links = [
    { label: "Credits", to: "credits", match: [`/movie/${id}`]},
    { label: "Trailer", to: "trailer" },
    { label: "Reviews", to: "reviews" },
  ];
  if (mediaType == "tv") {
    links.push({ label: "Seasons", to: "seasons", match: [`/tv/${id}`]});
  }

  return (
    <div>
      <div
        className="h-[420px] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
        }}
      />

      <div className="flex gap-6 mt-4">
        <img
          className="w-[140px] h-[210px] object-cover rounded-xl shrink-0"
          src={`${IMAGE_BASE_URL}${data.poster_path}`}
          alt={data.title}
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-white">
            {data.title || data.name}
          </h1>
          <p className="text-[13px] text-white/50 leading-relaxed">
            {data.overview}
          </p>
          <KeyValueLabels label="Release Date" value={data.release_date} />
          <KeyValueLabels label="Rating" value={data.vote_average} />
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <LinkGroup options={links} />
      </div>
      {location.pathname === `/movie/${id}` ? (
        <CreditsView />
      ) : location.pathname === `/tv/${id}` ? (
        <SeasonsView />
      ) : (
        <Outlet />
      )}
      <div className="mt-4"></div>
    </div>
  );
};
