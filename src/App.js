import React, { useState, useEffect } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner.js";
import Navbar from "./Navbar.js";
import { SpinnerDotted } from "spinners-react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      
        {loading ? (
        <SpinnerDotted
          size={57}
          thickness={100}
          speed={100}
          color="rgb(217, 18, 18)"
          className="loader"
          
         
        />
       
      ) 
      : (
        <>
          <Navbar />
          <Banner />
          <Row
            title="Trending"
            fetchUrl={requests.fetchTrending}
            isLargeRow={true}
          />

          <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />

          <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Top Grossing" fetchUrl={requests.fetchTopRated} />
          <Row title="Old Movies" fetchUrl={requests.fetchOldMovies} />
        </>
      )}
      
    </div>
  );
}

export default App;
