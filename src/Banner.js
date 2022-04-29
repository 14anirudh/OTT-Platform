import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      ); //to select random movie out array to be displayed
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }// for truncating the movie overview to n characters.

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="buttons">
          <button className="button">Play Now</button>
          <button className="button">Add to Watchlist</button>
        </div>
        <h2 className="description">{truncate(movie?.overview,200)}</h2>
      </div>
      <div className="fadebutton"/>
    </header>
  );
}

export default Banner;
