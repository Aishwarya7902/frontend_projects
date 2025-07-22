import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${
    data.backdrop_path ?? data.profile_path
  }`;
  return (
    <div
      style={{
        background: `
          linear-gradient(
            rgba(0,0,0,0.2),
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.8)
          ),
          url(${imageUrl})
        `,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh]  flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-xl text-white font-black ">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="mt-3 mb-3 w-[70%] text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-500">more</Link>
      </p>

      <p>
        {data.release_date && (
          <>
            <i className="text-green-300 ri-megaphone-fill mr-2" />
            <span>{data.release_date}</span>
          </>
        )}
        {data.media_type && (
          <>
            {/* add some left‑margin only if release_date was shown */}
            <i
              className={`text-green-300 ri-album-fill ${
                data.release_date ? "ml-5" : ""
              } mr-2`}
            />
            <span>{data.media_type.toUpperCase()}</span>
          </>
        )}
      </p>
      <Link className="bg-[#6556CD] rounded p-3 mt-4"><p className="text-white font-semibold">Watch Trailer</p></Link>
    </div>
  );
};

export default Header;
