import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";

const Popular = () => {
  document.title = "CuddleScreen | Popular";
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [category, setCategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `/${category}/popular?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setPopular((prevData) => [...prevData, ...data.results]);
        setPage((prev) => prev + 1);
        
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  

  useEffect(() => {
    setPopular([]); // clear out the old list
    setPage(1);
    getPopular();
  },[category]);

 return popular.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className=" w-full flex items-center justify-between">
        <h3 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h3>
        <div className="flex items-center w-[80%]">
          <Topnav />
           <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        loader={<h1>Loading...</h1>}   
        next={getPopular}
        hasMore={hasMore}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading/>
  );
};

export default Popular;
