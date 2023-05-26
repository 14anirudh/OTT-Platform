import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner.js";
import Row from "./Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top Grossers"
        fetchUrl={requests.fetchTopGrossing}
        isLargeRow={true}
      />
      <Row
        title="All Time Classics"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row title="Action Blitz" fetchUrl={requests.fetchActionMovies} />
      <Row title="Sizzling Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Nightmare Factory" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comic Escapades" fetchUrl={requests.fetchComedyMovies} />
    </>
  );
};

export default Home;
