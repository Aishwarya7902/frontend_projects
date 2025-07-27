import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[50vh] p-5 mb-5">
      <div className="mb-5">
        <h1 className=" text-xl font-semibold">Trending</h1>

      </div>
      <div className=" w-[100%] h-[50vh] flex overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className=" min-w-[20%] h-full mr-5 mb-5  bg-zinc-900">
            <img className="w-full h-[45%] object-cover" src={`https://image.tmdb.org/t/p/original/${
    d.backdrop_path ?? d.poster_path}`} alt="" />
            <div className="text-white p-3 h-[55%]">
              <h3 className="text-xl  mb-2  font-bold">
              {d.name ||
                d.original_name ||
                d.title ||
                d.original_title}
            </h3>
            <p >
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-500">more</span>
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
