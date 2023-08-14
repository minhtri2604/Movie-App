import  { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`https://api.themoviedb.org/3/trending/movie/${endpoint}?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US `);




  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  

  return (
    <div className="relative top-[100px] ">
      <ContentWrapper>
        <div className="flex justify-between">
          <span className="text-[24px] text-white font-medium mb-[2rem]">
            Trending
          </span>
          <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
