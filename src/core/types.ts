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
