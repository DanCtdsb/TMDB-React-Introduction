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
import { FaCalendarAlt } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export const MovieView = () => {
  const { id, mediaType } = useParams();
  const location = useLocation();
  const data = useGetData<MediaResponse>(
    `${BASE_ENDPOINT}/${mediaType}/${id}`,
    {},
    [id, mediaType],
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const links = [
    { label: "Credits", to: "credits", match: [`/movie/${id}`], end: true },
    { label: "Trailer", to: "trailer" },
    { label: "Reviews", to: "reviews" },
  ];
  if (mediaType == "tv") {
    links.push({
      label: "Seasons",
      to: "seasons",
      match: [`/tv/${id}`],
      end: true,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div
        className="h-[360px] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
        }}
      />

      <div className="flex gap-6">
        <img
          className="w-[140px] h-[210px] object-cover rounded-xl shrink-0 -mt-16 border-2 border-white/10"
          src={`${IMAGE_BASE_URL}${data.poster_path}`}
          alt={data.title}
        />
        <div className="flex flex-col gap-3 pt-2">
          <h1 className="text-2xl font-semibold text-white">
            {data.title || data.name}
          </h1>
          <p className="text-[13px] text-white/50 leading-relaxed">
            {data.overview}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-white/30" />
              <KeyValueLabels
                label="Release Date"
                value={data.release_date ?? data.first_air_date}
              />
            </div>
            <div className="flex items-center gap-2">
              <GoStarFill className="text-white/30" />
              <KeyValueLabels label="Rating" value={data.vote_average} />
            </div>
            {location.pathname === `/tv/${id}` && (
              <>
                <KeyValueLabels
                  label="Seasons"
                  value={data.number_of_seasons}
                />
                <KeyValueLabels
                  label="Episodes"
                  value={data.number_of_episodes}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <LinkGroup options={links} />
      </div>

      {location.pathname === `/movie/${id}` ? (
        <CreditsView />
      ) : location.pathname === `/tv/${id}` ? (
        <SeasonsView />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
