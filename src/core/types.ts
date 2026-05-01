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
    id: string;
    name: string;
    posterPath: string;
    episodeCount: number;
    seasonNumber: number;
    voteAverage:string;
  }>;
};