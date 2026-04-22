export type MovieType = {
    results: Array <{
        id: number;
        original_title: string;
        poster_path: string;
    }>;
    total_pages: number;
}

export type TelevisionType = {
    results: Array <{
        id: number;
        original_name: string;
        poster_path: string;
    }>;
}