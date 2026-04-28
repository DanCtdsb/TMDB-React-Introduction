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

export type MovieRespsonse = {
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
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
  total_pages: number;
};