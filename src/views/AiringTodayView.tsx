// import { ImageGrid } from "@/components/ImageGrid";
// import type { tvType } from "../core/types";
// import { useGetData } from "../hooks/useGetData";


// export const AiringTodayView = () => {
//     const data = useGetData<tvType>(`https://api.themoviedb.org/3/tv/airing_today?api_key=`);
//     if (!data) {    
//         return <div>Loading...</div>;
//      }
//   const gridDataResults = data.results.map((tvShow) => ({
//       id: tvShow.id,
//       imagePath: tvShow.poster_path,
//       primaryText: tvShow.original_name
//   }));
  
//   return (
//       <ImageGrid results={gridDataResults}></ImageGrid>
//   );
// }