import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import { useParams } from "react-router-dom";
const Details = () => {
  const {  id } = useParams();
  
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
  );
  const { data: credits, loading: creditsLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e9e9d8da18ae29fc430845952232787c`
  );
  return (
    <div>
      <DetailsBanner video={data} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data?.videos.results} loading={loading} />
      <Similar id={id}/>
      <Recommendation id={id} />
    </div>
  );
};

export default Details;
