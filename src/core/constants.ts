export const API_KEY = import.meta.env.VITE_API_KEY;

export const MOVIE_ENDPOINT = "https://api.themoviedb.org/3/movie";
export const TELEVISION_ENDPOINT = "https://api.themoviedb.org/3/tv";
export const BASE_ENDPOINT = "https://api.themoviedb.org/3";
export const DISCOVER_ENDPOINT = "https://api.themoviedb.org/3/discover";


export const SEARCH_ENDPOINT = "https://api.themoviedb.org/3/search";

export const TRENDING_ENDPOINT = "https://api.themoviedb.org/3/trending";

export const ORIGINAL_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const PERSON_ENDPOINT = "https://api.themoviedb.org/3/person";

export const movie_genres = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Crime", id: 80 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Mystery", id: 9648 },
    { name: "Sci-Fi", id: 878 },
]
export const tv_genres = [
    { name: "Action", id: 10759 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Kids", id: 10762 },
    { name: "Mystery", id: 9648 },
    { name: "Sci-Fi", id: 10765 },
]
