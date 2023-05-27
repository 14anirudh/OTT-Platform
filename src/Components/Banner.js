import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import requests from "../requests";
import "../Styles/Banner.css";

import { WatchlistContext } from "../context/WatchlistContext";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [moviedesc, setMoviedesc] = useState("Movie Overview");
  const [value, setValue] = useState(0);

  const { watchlist, addToWatchlist } = useContext(WatchlistContext);
  console.log(watchlist);

  const handleClick = () => {
    if (value === 0) {
      setMoviedesc(truncate(movie?.overview, 200));
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
          <button className="button" onClick={() => addToWatchlist(movie)}>
            Add to Watchlist
          </button>
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
    </header>
  );
}

export default Banner;
