import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HeroBanner.scss";
import requests from "../../../request";
const HeroBanner = () => {
  const [background, setBackground] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(requests.requestUpcoming).then((res) => {
      setBackground(res.data.results[Math.floor(Math.random() * 20)]);
    });
  }, []);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="w-full  h-[600px] bg-[#04152d]  text-white relative ">
      <img
        className="top-0 z-10 w-full h-full  object-cover 
        object-center
        left: 0;
        opacity: 0.5;
        overflow: hidden;"
        src={`https://image.tmdb.org/t/p/original${background?.backdrop_path}`}
        alt="/"
      />
      <div className="opacity-layer"></div>
      <div className="absolute z-[20] top-[50%] translate-y-[-50%] w-full lg:h-full flex flex-col text-center justify-center   ">
        <h1 className="text-[50px] md:text-[80px] font-bold mb-[10px] ">
          Welcome.
        </h1>
        <p className="text-[18px] md:text-[24px] font-medium">
          {" "}
          Millions of movies, TV show and people to discover. Explore now{" "}
        </p>
        <div className="w-full px-[50px] mt-4">
          <input
            className=" w-[80%] lg:w-[50%] h-[50px] p-[10px] text-sm rounded-l-full text-black outline-none "
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button
            className="w-[20%] lg:w-[10%] bg-gradient-to-r from-[#f89e00] to-[#da2f68] h-[50px] text-white rounded-r-full  "
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
