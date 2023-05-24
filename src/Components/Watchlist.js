import React ,{useState} from "react";
import { Link } from "react-router-dom";

const Watchlist = () => {

  const [movie, setMovie] = useState([]);

  return (
    <div>
      <Link to="/home"><h1 className="text-4xl mx-4 pt-3 text-[rgb(217,18,18)] font-bold ">
            Watchlist
          </h1></Link>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container py-8 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <div className="h-[150%] w-[80%] border-2"  style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${localStorage.getItem("movie")}")`,
                    backgroundSize: "cover",
              }}></div>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {localStorage.getItem("name")}</h2>
          <p className="leading-relaxed">
            {localStorage.getItem("overview")}
          </p>
          
        </div>
      </div>
     
    </div>
  </div>
</section>
    </div>
  );
};

export default Watchlist;
