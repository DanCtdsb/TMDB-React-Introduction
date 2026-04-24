import { useNavigate, useSearchParams } from "react-router-dom";
import { LinkGroup } from "./LinkGroup"
import { SearchBar } from "./SearchBar"
import { ButtonGroup } from "./ButtonGroup";


export const Header = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("q") || "";
  const mediaType = searchParams.get("media") || "movie";

    return(
        <header>
            <LinkGroup options={[
                {label: "Movies", to: "/movies"},
                {label: "TV", to: "/television"},
                {label: "Trending", to: "/trending/movie"}
            ]}/>
            <SearchBar
                value={queryValue}
                onChange={(value) => navigate(`/search?q=${value}&media=${mediaType}`)}/>
            <ButtonGroup
                value={mediaType}
                onClick={(value) => setSearchParams({ q: queryValue, media: value })}
                options={[
                { label: "Movies", value: "movie" },
                { label: "Television", value: "tv" },
                { label: "Person", value: "person" },
                ]}/>
        </header>
    )
}