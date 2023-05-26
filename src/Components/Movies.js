import React, { useContext } from "react";
import Row from "./Row";
import requests from "../requests";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <div className="d-flex flex justify-between">
        <h1 className="mx-4 text-4xl text-[#F5F5F5] font-bold py-4">MOVIES</h1>
        <Link to="/home">
          <button className="p-4 text-[#F5F5F5]">Back to Home</button>
        </Link>
      </div>
      <Row
        title="Action Extravaganza: Unleash the Thrills!"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Laugh Riot: Hilarious Comedy Capers"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Heartstrings Unleashed: Captivating Romantic Films"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Terror Vault: Pulse-Pounding Horror Collection"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />

      <Row
        title="Golden Era Gems: Vintage Movie Collection"
        fetchUrl={requests.fetchOldMovies}
        isLargeRow={true}
      />
    </div>
  );
};

export default Movies;
