import React from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg'

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full m-5 bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link className="w-[30vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] w-full object-cover"
            src={c.backdrop_path || c.poster_path || c.profile_path? `https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.poster_path || c.profile_path
            }` :noimage}
            alt=""
          />

          <h3 className="text-xl text-zinc-200 font-semibold mt-3">
            {c.name || c.original_name || c.title || c.original_title}
         </h3>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
