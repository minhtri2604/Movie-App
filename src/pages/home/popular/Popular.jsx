import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import requests from "../../../request";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`https://api.themoviedb.org/3/${endpoint}/popular?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="flex justify-between mt-[8rem]">
          <span className="text-[24px] text-white font-medium mb-[2rem] "> What's Popular</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
