import { useNavigate, useParams } from "react-router-dom";
import type { MediaType } from "@/core/types";
import { useGetData } from "@/hooks/useGetData";
import { ButtonGroup, ImageGrid, Pagination } from "@/components";
import { MOVIE_ENDPOINT } from "@/core/constants";
import { useEffect, useState } from "react";

export const MoviesView = () => {
    const navigate = useNavigate();
    const { selection = "now_playing" } = useParams();
    const [page, setPage] = useState<number>(1);
    const data = useGetData<MediaType>(`${MOVIE_ENDPOINT}/${selection}`, { page }, [selection, page]);

    useEffect(() => {
        setPage(1);
    }, [selection]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const gridDataResults = data.results.map((movie) => ({
        id: movie.id,
        imagePath: movie.poster_path || "",
        primaryText: movie.original_title || "",
    }));

    return (
        <div className="flex flex-col gap-6">
            <ButtonGroup
                value={selection}
                onClick={(value) => navigate(`/movie/category/${value}`)}
                options={[
                    { label: "Now Playing", value: "now_playing" },
                    { label: "Popular", value: "popular" },
                    { label: "Top Rated", value: "top_rated" },
                    { label: "Upcoming", value: "upcoming" },
                ]}
            />
            <ImageGrid results={gridDataResults} onClick={(id) => navigate(`/movie/${id}`)} />
            <Pagination page={page} maxPage={data.total_pages} onClick={setPage} />
        </div>
    );
};