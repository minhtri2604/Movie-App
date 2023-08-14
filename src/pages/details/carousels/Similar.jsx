import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import requests from "../../../request";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;