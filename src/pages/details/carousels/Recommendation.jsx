import React, { useEffect, useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { fetchDataFromApi } from "../../../utils/api";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
  );

  const { data: recoment } = useFetch(
    `https://api.themoviedb.org/3/movie/12/recommendations?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results < 1 ? recoment?.results : data?.results }
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;
