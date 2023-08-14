import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import requests from "../../../request";

const Horror = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/search/${endpoint}?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&query=horror&page=1&include_adult=false`);
   
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
<div className="flex justify-between ">
                    <span className="text-[24px] text-white font-medium mb-[2rem] ">Horror</span>
                    <SwitchTabs
                        data={["Movies", "TV Shows"]}
                        onTabChange={onTabChange}
                    />
</div>
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Horror;