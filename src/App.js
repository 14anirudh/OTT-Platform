import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true} /*default true without anuything*/
      />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
