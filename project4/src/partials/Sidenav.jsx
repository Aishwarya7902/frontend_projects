
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill  mr-3 text-2xl "></i>
        <span className="text-2xl text-purple-200">CuddleScreen</span>
      </h1>

      <nav className="flex flex-col  text-xl gap-5">
        <h2 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h2>
        <Link to="/trending" className="!text-zinc-400 hover:!text-white ">
          <i className=" mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to="/popular" className="!text-zinc-400 hover:!text-white">
          <i className=" mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movies" className="!text-zinc-400 hover:!text-white">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv-shows" className="!text-zinc-400 hover:!text-white">
          <i className="mr-2 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link to="/people" className="!text-zinc-400 hover:!text-white">
          <i className="mr-2 ri-team-line"></i>People
        </Link>
      </nav>
      
       
      
    </div>
  );
};

export default Sidenav;
