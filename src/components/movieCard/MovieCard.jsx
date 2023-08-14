import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";

const MovieCard = ({ data }) => {
  
  const urlImages = `https://image.tmdb.org/t/p/original`;

  const navigate = useNavigate();
  
  return (
    <div className="movieCard" onClick={() => navigate(`/details/${data.id}`)}>
      <div className="posterBlock">
        <Img
          className="posterImg"
          src={urlImages + data.poster_path || PosterFallback }
        />

        <React.Fragment>
          <CircleRating rating={data.vote_average.toFixed(1)} />
          <Genres data={data.genre_ids} />
        </React.Fragment>
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
