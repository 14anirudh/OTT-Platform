import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styles/Row.css";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title || movie?.original_name ||"")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    console.log(movie);
  };
  console.log(trailerUrl);
  // const [watchlist, setWatchlist] = useState([]);

  // const handleMovie=()=>{
  //   const movieData={
  //     name:movie?.name || movies?.title || movies?.original_name,
  //     movie:movies?.backdrop_path,
  //     overview:movies?.overview
  // }
  // setWatchlist([...watchlist,movieData]);
  // localStorage.setItem("watchlist",JSON.stringify(watchlist));
  // console.log(watchlist);
  // }

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
       
       <div className="poster">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`img  ${isLargeRow && "largeimg"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              // onClick={handleMovie}
            />
            
          ))}
        </div>
       
    
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
