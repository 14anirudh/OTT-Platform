import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const Fav = () => {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <div>
      <h1>Watchlist</h1>
      {watchlist.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Fav;
