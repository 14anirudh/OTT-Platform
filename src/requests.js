const api_key = "078f6984dc407c0292d347a7ab42b5af";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${api_key}`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=action&with_watch_monetization_types=flatrate`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchTopRated:`/discover/movie?api_key=${api_key}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`,
  fetchOldMovies:`/discover/movie?api_key=${api_key}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=1&year=2001&with_watch_monetization_types=flatrate`
};

export default requests;
