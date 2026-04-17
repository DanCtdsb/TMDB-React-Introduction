import { Routes, Route } from "react-router-dom"
// import { AiringTodayView } from "./views/AiringTodayView"
import { NowPlayingView } from "./views/NowPlayingView"
import { TestView } from "./views/testView"
import { ErrorView } from "./views/ErrorView"


export const App = () => { 
   {/* <div> */}
 {/* <NowPlayingView></NowPlayingView> */}
 {/* <AiringTodayView></AiringTodayView> */}
{/* </div> */}
  return ( 
    <Routes>
      <Route path="/" element={<TestView></TestView>} />
      <Route path="/movies" element={<NowPlayingView></NowPlayingView>} />
      {/* <Route path="/tvShow" element={<AiringTodayView></AiringTodayView>} /> */}
      <Route path="*" element={<ErrorView />} />

  </Routes>
  )
}
