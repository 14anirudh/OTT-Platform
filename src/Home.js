import React from 'react'
import Navbar from './Navbar'
import Banner from "./Banner.js";
import Row from "./Row";
import requests from "./requests";

const Home = () => {
  return <>
  <Navbar/>
  <Banner />
        <Row
          title="Trending"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
        />
        <Row title="Top Grossing" fetchUrl={requests.fetchTopGrossing} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Old Movies" fetchUrl={requests.fetchOldMovies} />
    </>
}

export default Home
