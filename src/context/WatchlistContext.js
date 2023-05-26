import React, { createContext, useState } from "react";

const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    setWatchlist([...watchlist, item]);
  };

  const removeFromWatchlist = (itemId) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== itemId);
    setWatchlist(updatedWatchlist);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistContext, WatchlistProvider };
