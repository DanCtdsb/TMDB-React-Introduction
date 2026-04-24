import { Routes, Route, Navigate } from "react-router-dom";
import { MoviesView } from "./views/MoviesView";
import { TelevisionView } from "./views/TelevisionView";
import { ErrorView } from "./views/ErrorView";
import { MainLayout } from "./layouts/MainLayout";
import { TrendingView } from "./views/TrendingView";
import { SearchView } from "./views/SearchView";
import {MovieView} from "./views/MovieView";

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/movies" />} />

        <Route
          path="/movies"
          element={<Navigate to="/movies/category/now_playing" />}
        />

        <Route path="/movies/category/:selection" element={<MoviesView/>} />
        <Route path="/movies/:id" element={<MovieView/>} />

        <Route path="/television" element={<TelevisionView/>}>
          <Route
            path="category/:selection"
            element={<TelevisionView/>}
          />
        </Route>
        <Route path="/trending/:selection" element={<TrendingView/>} />
        <Route path="/search" element={<SearchView />} />
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
