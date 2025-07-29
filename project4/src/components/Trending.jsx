import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };


  console.log(trending);

  useEffect(() => {
    getTrending();
  }, [category, duration]);


  return trending ? (
    <div className="px-[3%] w-screen h-screen">
      <div className="w-full flex items-center justify-between">
        <h3 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h3>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setCategory(e.target.value)}  />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" options={["day", "week"]} func={(e)=>setDuration(e.target.value)} />
        </div>
      </div>
      <Cards data={trending} title={category}/>
    </div>
  ):<Loading/>;
};

export default Trending;
