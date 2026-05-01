import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LinkGroup } from "./LinkGroup";
import { SearchBar } from "./SearchBar";
import { ButtonGroup } from "./ButtonGroup";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("q") || "";
  const [mediaState, setMediaState] = useState<string>("movie");
  const location = useLocation();
  return (
    <header className="flex items-center gap-3 bg-[#111] rounded-xl px-4 py-3">
      <LinkGroup
        options={[
          { label: "Movies", to: "/movies" },
          { label: "TV", to: "/television" },
          { label: "Trending", to: "/trending/movie" },
        ]}
      />
      <SearchBar
        value={queryValue}
        onChange={(value) => navigate(`/search?q=${value}&media=${mediaState}`)}
      />
      <ButtonGroup
        value={mediaState}
        onClick={(value) => {
          if (location.pathname === "/search") {
            navigate(`/search?q=${queryValue}&media=${value}`);
          }
          setMediaState(value)
        }}
        options={[
          { label: "Movies", value: "movie"},
          { label: "Television", value: "tv" },
          { label: "Person", value: "person" },
        ]}
      />
    </header>
  );
};