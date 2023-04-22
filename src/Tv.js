import React,{useEffect,useState} from 'react'
import Row from "./Row";
import requests from "./requests";
import {Link} from 'react-router-dom'

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
        <div className="d-flex flex justify-between">
        <h1 className='mx-4 text-4xl text-[#F5F5F5] font-bold py-4'>TV SHOWS</h1>
        <Link to ="/home"><button className='p-4 text-[#F5F5F5]'>Back to Home</button></Link>
        </div>
        <Row title="Airing Today" rating={movies.author_details?.rating} fetchUrl={requests.fetchtvtoday} isLargeRow={true} />
        {/* <Row title="Trending in TV" fetchUrl={requests.fetchtv} isLargeRow={true} /> */}
        <Row title="Top Rated in TV" fetchUrl={requests.fetchtoptv} isLargeRow={true} />
    </div>
  )
}

export default Tv