export type MediaType = {
    results: Array <{
        id: number;
        original_title?: string;
        original_name?: string;
        poster_path?: string;
        profile_path?: string;
    }>;
    total_pages: number;
}

export type MediaResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: string;
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  
  total_pages: number;
};

export type TrailerResponse = {
  id: number;
  results: Array<{
    key: string;
    name: string;
    site: string;
    type: string;
  }>;
};

export type CreditsResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }>;
};

export type ReviewsResponse = {
  results: Array<{
    id: string;
    author: string;
    content: string;
  }>;
};

export type SeasonsResponse = {
  seasons: Array<{
    season_number: number;
    name: string;
    poster_path: string;
    episode_count: string;
    vote_average: string;
  }>;
};

export type SeasonDetailsResponse = {
  seasons: Array<{
    season_number: number;
    air_date: string;
    name: string;
    overview: string;
  }>
};

export type EpisodesResponse = {
  episodes: Array<{
    id: number;
    name: string;
    still_path: string;
    overview: string;
    vote_average: string;
  }>;
};

export type PersonResponse = {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
};

export type CareerResponse = {
  cast: Array<{
    id: number;
    original_title?: string;
    original_name?: string;
    poster_path?: string;
    profile_path?: string;
    media_type: string;
  }>;
};