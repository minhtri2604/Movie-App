import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";


const Genres = ({data}) => {
    const [genres, setGenres] = useState([])
    useEffect(() =>{
    fetchDataFromApi(`https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`).then((res) =>{
        setGenres(res)
    })
    },[])

    
    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;