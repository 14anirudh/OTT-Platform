import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import "../Styles/watch.css";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  console.log(watchlist);
  return (
    <div>
      <div className="d-flex flex justify-between mb-8">
        <h1 className="mx-4 text-4xl text-[#9AE39A] font-bold py-4">
          WATCHLIST
        </h1>
        <Link to="/home">
          <button className="p-4 hover:text-[#9AE39A] text-[#8E6E9F]">
            Back to Home
          </button>
        </Link>
      </div>
      {watchlist.map((movie) => (
        <div key={movie.id} className="main">
          <div className="img-div">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="imgW"
            />
          </div>
          <div className="info">
            <p className="text-xl">
              {movie?.title || movie?.name || movie?.original_name}
            </p>
            <p className="text-l text-[#F5F5F5]">
              {movie.overview.substring(0, 250) + "..."}
            </p>
          </div>
          <button
            className="button-remove"
            onClick={() => removeFromWatchlist(movie.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
