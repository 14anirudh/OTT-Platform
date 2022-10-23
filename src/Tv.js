import React,{useEffect,useState} from 'react'
import Row from "./Row";
import requests from "./requests";

const Tv = () => {
    const[movies,setMovies]=useState([]);

   useEffect(() => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.themoviedb.org/3/tv/94997/reviews?api_key=078f6984dc407c0292d347a7ab42b5af&language=en-US&page=1", requestOptions)
   
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results[0]);
            console.log(data.results);
            // console.log(data.results.id);
            }
        );
    }, []);
console.log(movies.id);
console.log(movies.author_details?.rating)

return (
    <div>
        <h1>TV SHOWS</h1>
        <Row title="Trending in TV" fetchUrl={requests.fetchtv} isLargeRow={true} />
        <Row title="Top Rated in TV" fetchUrl={requests.fetchtoptv} isLargeRow={true} />
        <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow={true} />
        <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow={true} />
        <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow={true} />
       
    </div>
  )
}

export default Tv