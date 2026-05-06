import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import {
  TrendingView,
  SearchView,
  MovieView,
  CreditsView,
  ReviewsView,
  TrailerView,
  SeasonsView,
  EpisodeView,
  ErrorView,
  MoviesView,
  TelevisionView,
  CareerView,
  ImagesView,
  HomeView,
  GenreView,
  SpecificEpisodeView
} from "@/views";
import { PersonView } from "./views/People/PersonView";
import { ModalLayout } from "./layouts/ModalLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route element={<MainLayout />}>

        <Route
          path="/movie"
          element={<MoviesView/>}
        />

        <Route path="/movie/category/:selection" element={<MoviesView />} />

        <Route path="/television" element={<TelevisionView />}>
          <Route path="category/:selection" element={<TelevisionView />} />
        </Route>
          <Route path="/trending/:selection" element={<TrendingView />} />
          <Route path = "genre/:mediaType/:genreId" element={<GenreView/>}/>
          <Route path="/search" element={<SearchView />} />
          <Route path="/person/:id" element={<PersonView/>}>
            <Route path="career" element={<CareerView />} />
            <Route path="images" element={<ImagesView />} />
          </Route>
          <Route element={<ModalLayout />}>
            <Route path="/:mediaType/:id" element={<MovieView />}>
              <Route path="credits" element={<CreditsView />} />
              <Route path="trailer" element={<TrailerView />} />
              <Route path="reviews" element={<ReviewsView />} />
              <Route path="seasons" element={<SeasonsView />}/>
            <Route path="seasons/:seasonNumber" element={<EpisodeView />}/>
            <Route path="seasons/:seasonNumber/:episode" element={<SpecificEpisodeView />} />
            </Route>
          </Route>
        </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
