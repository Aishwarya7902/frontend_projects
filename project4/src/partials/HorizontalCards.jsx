import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data,func }) => {
  return (
    
      
      <div className=" w-[100%] h-[50vh] flex overflow-y-hidden mb-2 p-2">
        {data.map((d, i) => (
          <div key={i} className=" min-w-[20%] h-full mr-5 mb-5  bg-zinc-900 overflow-hidden">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path ?? d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[55%]">
              <h3 className="text-xl  mb-2  font-bold ">
                {d.name || d.original_name || d.title || d.original_title}
              </h3>
              <p>
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500 text-xs">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default HorizontalCards;
