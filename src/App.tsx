import { Routes, Route, Navigate } from "react-router-dom";
// import { AiringTodayView } from "./views/AiringTodayView"
import { MoviesView } from "./views/MoviesView";
// import { TestView } from "./views/testView";
import { TelevisionView } from "./views/TelevisionView";
import { ErrorView } from "./views/ErrorView";
import { MainLayout } from "./layouts/MainLayout";

export const App = () => {
  {
    /* <div> */
  }
  {
    /* <MoviesView></MoviesView> */
  }
  {
    /* <AiringTodayView></AiringTodayView> */
  }
  {
    /* </div> */
  }
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/movies" />} />

        <Route
          path="/movies"
          element={<Navigate to="/movies/category/now_playing" />}
        />

        <Route path="/movies/category/:selection" element={<MoviesView></MoviesView>} />

        <Route path="/television" element={<TelevisionView></TelevisionView>}>
          <Route
            path="category/:selection"
            element={<TelevisionView></TelevisionView>}
          />
        </Route>
      </Route>
      {/* <Route path="/tvShow" element={<AiringTodayView></AiringTodayView>} /> */}
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
