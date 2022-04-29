import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

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

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // http://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
       
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name)
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="poster">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            //renders only if needed not the entire row
            className={`img  ${isLargeRow && "largeimg"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {/* <YouTube videoId='mqqft2x_Aa4' opts={opts} /> */}
    </div>
  );
}
//movieTrailer is npm module which finds the youtube trailer for name
export default Row;
