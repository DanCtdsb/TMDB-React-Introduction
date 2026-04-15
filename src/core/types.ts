export type MovieType = {
    results: Array <{
        id: number;
        original_title: string;
        poster_path: string;
    }>;
}

export type tvType = {
    results: Array <{
        id: number;
        original_name: string;
        poster_path: string;
    }>;
}