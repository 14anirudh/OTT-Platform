import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [moviedesc, setMoviedesc] = useState("Movie Overview");
  const [value, setValue] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = () => {
    if (value === 0) {
      setMoviedesc(movie?.overview);
      setValue(1);
    } else {
      setMoviedesc(truncate(movie?.overview, 100));
      setValue(0);
    }
  };
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

  // for truncating the movie overview to n characters.
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) : str;
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlePlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // const handleMovie=()=>{
  //   const movieData={
  //     name:movie?.name || movie?.title || movie?.original_name,
  //     movie:movie?.backdrop_path,
  //     overview:movie?.overview
  // }
  // setWatchlist([...watchlist,movieData]);
  // localStorage.setItem("watchlist",JSON.stringify(watchlist));
  // console.log(watchlist);
  // }

  // const handleMovie=()=>{
  //   console.log("Movie Added to Watchlist");
  //   localStorage.setItem("name",movie?.name || movie?.title || movie?.original_name);
  //   localStorage.setItem("movie",movie?.backdrop_path);
  //   localStorage.setItem("overview",movie?.overview);
  // }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="buttons">
          <button className="button" onClick={() => handlePlay(movie)}>
            Play Now
          </button>
          <button className="button">Add to Watchlist</button>
        </div>
        <h2 className="description">
          {moviedesc}
          {value === 0 ? (
            <button className="text-pink-500" onClick={handleClick}>
              ...more
            </button>
          ) : (
            <button className="text-pink-500" onClick={handleClick}>
              &#160;...less
            </button>
          )}
        </h2>
        
      </div>
      {/* <div className="">
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div> */}
     
     
      {/* <div className="fadebutton" /> */}
    </header>
  );
}

export default Banner;
