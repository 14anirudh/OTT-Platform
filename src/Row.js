import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="poster">
        {movies.map((movie) => (
          <img
            key={movie.id}
            //renders only if needed not the entire row
            className={`img  ${isLargeRow && "largeimg"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
